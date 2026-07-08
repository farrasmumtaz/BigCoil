import { IsString } from 'class-validator';

export class CreateDreamBetterDto {
  @IsString()
  title!: string;

  @IsString()
  slug!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;
}
