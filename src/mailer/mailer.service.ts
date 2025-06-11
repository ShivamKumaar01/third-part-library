import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class MailerService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shivamkumaar01@gmail.com',
      pass: 'orep goto unig fkgz'
    },
  });

  async sendWelcomeEmail(to: string, name: string) {
    const mailOptions = {
      from: '"Shivam" <shivamkumaar01@gmail.com>',
      to,
      subject: 'Welcome to Our App!',
      text: `Hi ${name},\n\nWelcome to Zenmonk We're happy to have you on board.\n\nThanks,\nShivam Team`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}


//      import { Injectable } from '@nestjs/common';
//      import { MailerService } from '@nestjs-modules/mailer';

//      @Injectable()
//      export class UserService {
//        constructor(private mailerService: MailerService) {}

//        async sendWelcomeEmail(user: any) {
//          await this.mailerService.sendMail({
//            to: user.email,
//            subject: 'Welcome to our App!',
//            template: 'welcome',
//            context: {
//              name: user.name,
//            },
//          });
//        }
//      }

// export { MailerService };

