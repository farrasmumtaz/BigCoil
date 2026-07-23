import { Injectable } from '@nestjs/common';
import { UploadFolder } from './utils/upload-folder';

interface UploadedFileDto {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

@Injectable()
export class UploadService {
  upload(file: UploadedFileDto, folder: UploadFolder) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/${folder}/${file.filename}`,
    };
  }
}
