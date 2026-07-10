import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TechnologyType } from '@prisma/client';

export class CreateTechnologyDto {
  @IsEnum(TechnologyType)
  type!: TechnologyType;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;
}
