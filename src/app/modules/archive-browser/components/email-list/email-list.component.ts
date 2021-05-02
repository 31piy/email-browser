import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Email } from 'src/app/modules/data-store';

/**
 * Renders a list of emails.
 *
 * @example
 * <app-email-list [emails]="emails" [selectedEmail]="selectedEmail"
 *   (itemSelected)="onItemSelected($event)">
 * </app-email-list>
 */
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
