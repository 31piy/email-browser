import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DataStoreService, Email } from 'src/app/modules/data-store';

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
        .pipe(
          tap((resp) => console.log(resp)),
          finalize(() => (this.loading = false))
        )
        .subscribe((resp) => {
          this.emails$.next(resp.emails);
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

  /**
   * Callback for the "itemSelected" event on the email list component.
   *
   * @param email The email object which was selected.
   */
  onEmailSelected(email: Email): void {
    this.selectedEmail = email;
  }
}
