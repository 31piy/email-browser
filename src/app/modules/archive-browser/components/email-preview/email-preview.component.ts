import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Email } from 'src/app/modules/data-store';

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
}
