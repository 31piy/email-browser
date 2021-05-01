import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailPreviewComponent implements OnInit {
  body = `\n\n -----Original Message-----\nFrom: \tRatcliff, Renee  \nSent:\tFriday, November 02, 2001 12:19 PM\nTo:\tAllen, Phillip K.\nSubject:\tRE: \n\nPhillip,\n\nThis section pertains to terminated employees who are paid out in the year following the termination event.  The way the tax law works, the tax basis for your share distribution will be based on the closing stock price the day preceding notification to the transfer agent.  As such, we will distribute net shares calculating the proper withholding at fair market value the day prior to notifying the transfer agent.  We will be distributing the shares reflected on your 9/30/01 statement (6,606 shares plus cash for fractional shares).  If you would prefer to settle the taxes with a personal check, we can distribute gross shares.  Please let me know you preference.\n\nAs you know, we are in the process of transferring recordkeeping services from NTRC to Hewitt.  As such, we have a CPA, Larry Lewis, working with us to audit and set up transition files.  He has become our department expert on the PSA account (much more knowledgeable than myself)  and the various plan provision amendments.  If you would like, we can set up a conference call with you, myself, and Larry to go over the payment methodology.  Please let me know a date and time that is convenient for you.\n\nThanks,\n\nRenee\n\n -----Original Message-----\nFrom: \tAllen, Phillip K.  \nSent:\tThursday, November 01, 2001 8:26 AM\nTo:\tRatcliff, Renee\nSubject:\t\n\nRenee,\n\nThank you for digging in to the issue of Deferred Phantom Stock Units.  It is clear that the payment will be made in shares.  However, I still don\u0027t understand which date will be used to determine the value and calculate how many shares.  The plan document under VII.  Amount of Benefit Payments reads \"The value of the shares, and resulting payment amount will be based on the closing price of Enron Corp. common stock on the January 1 before the date of payment, and such payment shall be made in shares of Enron Corp. common stock.\"  Can you help me interpret this statement and work through the numbers on my account.\n\nThank you,\n\nPhillip Allen`;
  constructor() {}

  ngOnInit(): void {}
}
