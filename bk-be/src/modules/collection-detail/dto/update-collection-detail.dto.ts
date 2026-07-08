import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionDetailDto } from './create-collection-detail.dto';

export class UpdateCollectionDetailDto extends PartialType(
  CreateCollectionDetailDto,
) {}
