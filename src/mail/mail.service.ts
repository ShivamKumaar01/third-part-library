


import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(params: {
    to: string;
    subject: string;
    // template?: string;
    // context?: any;
  }) {
    try {
      const sendMailParams = {
        to: params.to,
        from: process.env.SMTP_FROM || 'default@example.com',
        subject: params.subject,
        // template: params.template,
        // context: params.context,
      };

      const response = await this.mailerService.sendMail(sendMailParams);
      this.logger.log(` Email sent to: ${params.to}`, response);
    } catch (error) {
      this.logger.error(` Error sending mail:`, error.stack);
    }
  }
}
