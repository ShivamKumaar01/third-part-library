import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
// import { MailerModule } from 'src/mailer/mailer.module';
import { Cloudinary } from 'src/cloudinary/entities/cloudinary.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports:[TypeOrmModule.forFeature([User,Cloudinary]),CloudinaryModule,MailModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
