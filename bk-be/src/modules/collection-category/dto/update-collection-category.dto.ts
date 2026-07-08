import { PartialType } from '@nestjs/mapped-types';

import { CreateCollectionCategoryDto } from './create-collection-category.dto';

export class UpdateCollectionCategoryDto extends PartialType(
  CreateCollectionCategoryDto,
) {}
