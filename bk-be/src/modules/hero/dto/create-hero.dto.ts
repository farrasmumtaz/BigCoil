import { IsString, IsOptional } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsString()
  description!: string;

  @IsString()
  buttonText!: string;

  @IsString()
  buttonLink!: string;

  @IsString()
  image!: string;
}
