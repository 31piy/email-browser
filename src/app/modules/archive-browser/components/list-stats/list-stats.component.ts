import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStatsComponent {
  /**
   * The number of currently visible items.
   */
  @Input() currentItemsCount: number;

  /**
   * The number of total available items
   */
  @Input() totalItemsCount: number;
}
