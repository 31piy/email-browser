import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * A simple component to show loading message.
 *
 * @example
 * <app-loader></app-loader>
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
