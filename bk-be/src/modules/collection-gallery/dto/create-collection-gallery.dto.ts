import { IsInt, IsString } from 'class-validator';

export class CreateCollectionGalleryDto {
  @IsInt()
  detailId!: number;

  @IsString()
  title!: string;

  @IsString()
  image!: string;
}
