import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductDescriptionDto {
  @IsInt()
  productId!: number;

  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
