import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import {
  DataStoreService,
  Email,
  GetAllResponse,
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
   * Subject to store the currently selected page.
   */
  currentPage$ = new BehaviorSubject<number>(null);

  /**
   * Subject to store the currently specified search token.
   */
  searchToken$ = new BehaviorSubject<string>(null);

  /**
   * Reference to the currently selected email.
   */
  selectedEmail: Email = null;

  /**
   * The collection of subscriptions created inside this component. Useful for
   * cleaning up subscriptions on component destroy.
   */
  private subscriptions: Subscription[] = [];

  constructor(private dataStore: DataStoreService) {}

  ngOnInit(): void {
    this.loading = true;

    this.subscriptions.push(
      combineLatest([this.currentPage$, this.searchToken$])
        .pipe(
          switchMap(([page, token]) =>
            this.dataStore
              .getAll({ searchToken: token, pageNumber: page })
              .pipe(finalize(() => (this.loading = false)))
          )
        )
        .subscribe((resp) => {
          this.emails$.next(resp.emails);
          this.summary$.next(resp.summary);
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
