import { IsString } from 'class-validator';

export class CreateAboutCompanyDto {
  @IsString()
  title!: string;

  @IsString()
  subtitle!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;
}
