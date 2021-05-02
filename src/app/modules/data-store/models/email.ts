/**
 * Represents an email.
 */
export interface Email {
  /**
   * The email ID of the sender of this email.
   */
  from: string;

  /**
   * A list of email IDs to whom this email was sent.
   */
  to: string[];

  /**
   * A list of email IDs who were copied in this email.
   */
  cc: string[];

  /**
   * A list of email IDS who were blind-copied in this email.
   */
  bcc: string[];

  /**
   * The subject of this email.
   */
  subject: string;

  /**
   * The body of this email.
   */
  body: string;

  /**
   * The ISO formatted date string indicating when this email was sent.
   */
  date: string;
}
