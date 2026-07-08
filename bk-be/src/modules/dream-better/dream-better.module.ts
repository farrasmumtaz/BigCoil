import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { DreamBetterController } from './dream-better.controller';
import { DreamBetterService } from './dream-better.service';

@Module({
  imports: [PrismaModule],
  controllers: [DreamBetterController],
  providers: [DreamBetterService],
})
export class DreamBetterModule {}
