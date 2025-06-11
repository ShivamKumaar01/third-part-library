// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { CloudinaryService } from './cloudinary.service';
// import { CreateCloudinaryDto } from './dto/create-cloudinary.dto';
// import { UpdateCloudinaryDto } from './dto/update-cloudinary.dto';

// @Controller('cloudinary')
// export class CloudinaryController {
//   constructor(private readonly cloudinaryService: CloudinaryService) {}


// }
// upload.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import * as multer from 'multer';

@Controller('upload')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage(), }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinaryService.uploadImage(file);
  }
}
