import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
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

  /**
   * The email object which should appear as selected.
   */
  @Input() selectedEmail: Email;

  /**
   * Event to fire when an email is selected.
   */
  @Output() itemSelected = new Subject<Email>();
}
