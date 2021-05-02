import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Email } from 'src/app/modules/data-store';

/**
 * Renders one email's details and optionally highlights the specified string
 * in the subject or body of the email.
 *
 * @example
 * <app-email-preview [email]="email" [highlightString]="highlight">
 * </app-email-preview>
 */
@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailPreviewComponent {
  /**
   * The email object.
   */
  @Input() email: Email;

  /**
   * Optional binding to pass the string to highlight.
   */
  @Input() highlightString: string;
}
