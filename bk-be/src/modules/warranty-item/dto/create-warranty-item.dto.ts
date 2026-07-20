import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateWarrantyItemDto {
  @IsInt()
  warrantyId!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}
