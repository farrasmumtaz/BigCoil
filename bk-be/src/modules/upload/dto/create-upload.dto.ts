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
    'product',
    'product-gallery',
    'product-specification',
    'product-description',
    'product-technology',
    'collection-detail',
    'exhibition',
    'dream-better-section',
  ])
  folder!: string;
}
