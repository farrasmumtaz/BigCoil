import { IsString } from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  image!: string;
}
