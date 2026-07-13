import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateDreamBetterSectionDto {
  @IsInt()
  dreamBetterId!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsInt()
  @Min(1)
  order!: number;
}
