import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  image!: string;

  @IsString()
  category!: string;

  @IsDateString()
  publishDate!: Date;

  @IsString()
  link!: string;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}
