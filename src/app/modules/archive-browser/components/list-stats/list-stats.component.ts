import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
