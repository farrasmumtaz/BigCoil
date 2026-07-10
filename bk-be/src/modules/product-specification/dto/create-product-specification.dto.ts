import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductSpecificationDto {
  @IsInt()
  productId!: number;

  @IsString()
  label!: string;

  @IsString()
  value!: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
