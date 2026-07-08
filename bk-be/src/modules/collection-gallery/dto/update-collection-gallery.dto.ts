import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionGalleryDto } from './create-collection-gallery.dto';

export class UpdateCollectionGalleryDto extends PartialType(
  CreateCollectionGalleryDto,
) {}
