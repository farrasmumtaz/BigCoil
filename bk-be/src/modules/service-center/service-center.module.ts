import { Module } from '@nestjs/common';

import { ServiceCenterController } from './service-center.controller';
import { ServiceCenterService } from './service-center.service';

import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceCenterController],
  providers: [ServiceCenterService],
})
export class ServiceCenterModule {}
