import {
  BadRequestException,
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
import { isUploadFolder } from './utils/upload-folder';

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
    }),
  )
  upload(
    @Param('folder') folder: string,

    @UploadedFile()
    file: UploadedFileDto,
  ) {
    if (!isUploadFolder(folder)) {
      throw new BadRequestException('Invalid upload folder');
    }

    return this.uploadService.upload(file, folder);
  }
}
