import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutBrandDto } from './create-about-brand.dto';

export class UpdateAboutBrandDto extends PartialType(CreateAboutBrandDto) {}
