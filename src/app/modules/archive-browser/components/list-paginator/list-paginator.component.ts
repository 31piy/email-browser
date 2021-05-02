import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPaginatorComponent {
  /**
   * The currently selected page.
   */
  @Input() currentPage: number;

  /**
   * The number of total pages
   */
  @Input() totalPages: number;

  /**
   * Event to emit whenever the page is changed.
   */
  @Output() pageChanged = new Subject<number>();
}
