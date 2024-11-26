/**
 * Interface representing the properties required to send an email
 * @property {string} fromName - The name of the email sender
 * @property {string} subject - The subject line of the email
 * @property {string} content - The main body content of the email
 * @property {string} fromEmail - The email address of the sender
 */
export interface SendEmailProps {
  fromName: string;
  subject: string;
  content: string;
  fromEmail: string;
}
