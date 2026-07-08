import { PartialType } from '@nestjs/mapped-types';
import { CreateDreamBetterDto } from './create-dream-better.dto';

export class UpdateDreamBetterDto extends PartialType(CreateDreamBetterDto) {}
