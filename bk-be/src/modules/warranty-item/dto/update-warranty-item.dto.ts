import { PartialType } from '@nestjs/mapped-types';
import { CreateWarrantyItemDto } from './create-warranty-item.dto';

export class UpdateWarrantyItemDto extends PartialType(CreateWarrantyItemDto) {}
