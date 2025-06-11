import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule } from 'src/mailer/mailer.module';
import { Cloudinary } from 'src/cloudinary/entities/cloudinary.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports:[TypeOrmModule.forFeature([User,Cloudinary]),MailerModule,CloudinaryModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
