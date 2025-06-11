import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerService } from './mailer.service';

@Module({
      imports: [TypeOrmModule.forFeature([])],
    //   controllers: [ProductController],
      providers: [MailerService],
       exports: [MailerService],
})
export class MailerModule {}

// import { Module } from '@nestjs/common';
// import { MailerModule } from '@nestjs-modules/mailer';


// @Module({
//   imports: [
//     MailerModule.forRootAsync({
//       useFactory: () => ({
//         transport: {
//           // host: process.env.EMAIL_HOST,
//           // port: process.env.EMAIL_PORT,
//           auth: {
//              user: 'shivamkumaar01@gmail.com',
//              pass: 'orep goto unig fkgz'
//           },
//         },
//         defaults: {
//           from: '"Shivam" <shivamkumaar01@gmail.com>',
//         },
//         template: {

//           options: {
//             strict: true,
//           },
//         },
//       }),
//     }),
//   ],
//   exports: [MailerModule],
// })
// export class MailModule { }