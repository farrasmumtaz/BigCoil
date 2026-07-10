import { IsString } from 'class-validator';

export class CreateAboutBrandDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;
}
