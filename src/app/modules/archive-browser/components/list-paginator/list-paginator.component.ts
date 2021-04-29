import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPaginatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
