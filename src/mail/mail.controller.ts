
import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  async sendMail() {
    await this.mailService.sendEmail({
      to: 'shivamkumaar01@gmail.com', 
      subject: 'Welcome to the realm of NestJS',
    });

    return { message: 'Email sent!' };
  }
}
