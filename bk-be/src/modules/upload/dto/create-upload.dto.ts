import { IsIn, IsString } from 'class-validator';

export class CreateUploadDto {
  @IsString()
  @IsIn([
    'company',
    'hero',
    'collection',
    'technology',
    'dream-better',
    'testimonial',
    'gallery',
    'video',
  ])
  folder!: string;
}
