import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Email } from 'src/app/modules/data-store';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailListComponent {
  /**
   * The list of emails.
   */
  @Input() emails: Email[];
}
