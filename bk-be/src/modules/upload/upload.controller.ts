import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { UploadService } from './upload.service';
import { storage } from './upload.storage';

interface UploadedFileDto {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post(':folder')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage,

      limits: {
        fileSize: 10 * 1024 * 1024,
      },

      fileFilter(req, file, cb) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

        if (!allowedTypes.includes(file.mimetype)) {
          return cb(
            new Error('Only JPG, PNG and WEBP images are allowed'),
            false,
          );
        }

        cb(null, true);
      },
    }),
  )
  upload(
    @Param('folder') folder: string,

    @UploadedFile()
    file: UploadedFileDto,
  ) {
    return this.uploadService.upload(file, folder);
  }
}
