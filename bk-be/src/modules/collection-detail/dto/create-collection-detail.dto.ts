import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCollectionDetailDto {
  @IsInt()
  collectionId!: number;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  videoUrl?: string;
}
