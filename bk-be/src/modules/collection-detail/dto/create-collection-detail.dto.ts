import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCollectionDetailDto {
  @IsInt()
  collectionId!: number;

  @IsString()
  @IsNotEmpty()
  heroTitle!: string;

  @IsString()
  @IsNotEmpty()
  heroDescription!: string;

  @IsString()
  @IsNotEmpty()
  heroImage!: string;
}
