import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  DataStoreService,
  Email,
  GetAllResponse
} from 'src/app/modules/data-store';

@Component({
  selector: 'app-email-archive-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit, OnDestroy {
  /**
   * Indicates whether the data is loading.
   */
  loading = false;

  /**
   * Subject to store the list of emails.
   */
  emails$ = new BehaviorSubject<Email[]>([]);

  /**
   * Subject to store the summary of the response.
   */
  summary$ = new BehaviorSubject<GetAllResponse['summary']>(null);

  /**
   * Reference to the currently selected email.
   */
  selectedEmail: Email = null;

  /**
   * The collection of subscriptions created inside this component. Useful for
   * cleaning up subscriptions on component destroy.
   */
  private subscriptions: Subscription[] = [];

  constructor(
    private dataStore: DataStoreService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.subscriptions.push(
      this.dataStore
        .getAll({})
        .pipe(finalize(() => (this.loading = false)))
        .subscribe((resp) => {
          this.emails$.next(resp.emails);
          this.summary$.next(resp.summary);
          this.cdr.detectChanges();
        })
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      if (!sub.closed) {
        sub.unsubscribe();
      }
    }
  }
}
