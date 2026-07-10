import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTechnologyDto } from './create-product-technology.dto';

export class UpdateProductTechnologyDto extends PartialType(
  CreateProductTechnologyDto,
) {}
