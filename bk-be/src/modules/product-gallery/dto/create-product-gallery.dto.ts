import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateProductGalleryDto {
  @IsInt()
  productId!: number;

  @IsString()
  image!: string;

  @IsOptional()
  @IsInt()
  sortOrder!: number;
}
