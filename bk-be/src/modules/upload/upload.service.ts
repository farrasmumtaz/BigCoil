import { Injectable } from '@nestjs/common';

interface UploadedFileDto {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

@Injectable()
export class UploadService {
  upload(file: UploadedFileDto, folder: string) {
    return {
      filename: file.filename,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      url: `/uploads/${folder}/${file.filename}`,
    };
  }
}
