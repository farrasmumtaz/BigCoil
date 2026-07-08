import { IsString } from 'class-validator';

export class CreateTechnologyDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  image!: string;
}
