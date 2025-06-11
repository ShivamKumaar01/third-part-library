import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './database/data-source';
import { MailerService } from './mailer/mailer.service';
import { MailerModule } from './mailer/mailer.module';
// import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options) ,UserModule, MailerModule, FileUploadModule,AuthModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule {}
