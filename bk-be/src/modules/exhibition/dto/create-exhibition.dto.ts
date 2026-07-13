import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateExhibitionDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  slug!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsDateString()
  eventDate!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  coverImage!: string;
}
