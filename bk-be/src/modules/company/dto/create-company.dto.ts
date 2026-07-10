import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name!: string;

  @IsString()
  tagline!: string;

  @IsString()
  address!: string;

  @IsString()
  logo!: string;

  @IsString()
  whatsapp!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  facebook?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  tiktok?: string;

  @IsOptional()
  @IsString()
  shopee?: string;

  @IsOptional()
  @IsString()
  tokopedia?: string;
}
