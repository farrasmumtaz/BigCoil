import { PartialType } from '@nestjs/mapped-types';
import { CreateDreamBetterSectionDto } from './create-dream-better-section.dto';

export class UpdateDreamBetterSectionDto extends PartialType(
  CreateDreamBetterSectionDto,
) {}
