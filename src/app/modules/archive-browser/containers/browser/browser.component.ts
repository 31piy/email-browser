import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
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

  emails$ = new BehaviorSubject<Email[]>([]);

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
