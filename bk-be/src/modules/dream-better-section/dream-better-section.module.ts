import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { DreamBetterSectionController } from './dream-better-section.controller';
import { DreamBetterSectionService } from './dream-better-section.service';

@Module({
  imports: [PrismaModule],
  controllers: [DreamBetterSectionController],
  providers: [DreamBetterSectionService],
})
export class DreamBetterSectionModule {}
