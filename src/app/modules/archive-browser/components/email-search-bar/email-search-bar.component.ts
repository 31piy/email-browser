import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-email-search-bar',
  templateUrl: './email-search-bar.component.html',
  styleUrls: ['./email-search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
