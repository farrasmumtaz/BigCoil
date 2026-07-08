import { IsString } from 'class-validator';

export class CreateCollectionCategoryDto {
  @IsString()
  name!: string;

  @IsString()
  slug!: string;
}
