import { IsInt, IsString } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  title!: string;

  @IsString()
  slug!: string;

  @IsInt()
  categoryId!: number;

  @IsString()
  description!: string;

  @IsString()
  coverImage!: string;
}
