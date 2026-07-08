import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { CollectionDetailController } from './collection-detail.controller';
import { CollectionDetailService } from './collection-detail.service';

@Module({
  imports: [PrismaModule],
  controllers: [CollectionDetailController],
  providers: [CollectionDetailService],
})
export class CollectionDetailModule {}
