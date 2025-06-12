// import { Module } from '@nestjs/common';
// import { MailService } from './mail.service';
// import { MailController } from './mail.controller';

// @Module({
//   providers: [MailService],
//   controllers: [MailController]
// })
// export class MailModule {}

import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: process.env.SMTP_HOST,
          // port: +process.env.SMTP_PORT,
          secure: false,
          tls: {
            rejectUnauthorized: false,
          },
        },
        defaults: {
          from: process.env.FROM,
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}
