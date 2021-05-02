import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-email-search-bar',
  templateUrl: './email-search-bar.component.html',
  styleUrls: ['./email-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSearchBarComponent {
  /**
   * The form control for the search input.
   */
  searchInputControl = new FormControl();

  /**
   * Emits for any changes in the search query.
   */
  @Output()
  queryChanged: Observable<string> = this.searchInputControl.valueChanges.pipe(
    debounceTime(200)
  );
}
