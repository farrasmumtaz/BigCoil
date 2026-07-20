import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWarrantyDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  heroImage!: string;
}
