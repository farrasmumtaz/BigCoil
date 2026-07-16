import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ServiceSettingController } from './service-setting.controller';
import { ServiceSettingService } from './service-setting.service';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceSettingController],
  providers: [ServiceSettingService],
})
export class ServiceSettingModule {}
