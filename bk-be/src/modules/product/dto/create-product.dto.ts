import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  collectionId!: number;

  @IsString()
  title!: string;

  @IsString()
  slug!: string;

  @IsString()
  shortDescription!: string;

  @IsString()
  heroImage!: string;

  @IsOptional()
  @IsString()
  videoUrl?: string;
}
