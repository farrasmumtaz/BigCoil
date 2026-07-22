import { IsIn, IsString } from 'class-validator';
import { UploadFolder, uploadFolders } from '../utils/upload-folder';

const allowedUploadFolders = Object.keys(uploadFolders) as UploadFolder[];

export class CreateUploadDto {
  @IsString()
  @IsIn(allowedUploadFolders)
  folder!: UploadFolder;
}
