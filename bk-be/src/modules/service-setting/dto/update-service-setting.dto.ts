import { PartialType } from '@nestjs/mapped-types';

import { CreateServiceSettingDto } from './create-service-setting.dto';

export class UpdateServiceSettingDto extends PartialType(
  CreateServiceSettingDto,
) {}
