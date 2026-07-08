import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name!: string;

  @IsString()
  tagline!: string;

  @IsString()
  description!: string;

  @IsString()
  logo!: string;
}
