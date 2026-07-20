import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateWarrantyDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  @IsNotEmpty()
  heroImage?: string;
}
