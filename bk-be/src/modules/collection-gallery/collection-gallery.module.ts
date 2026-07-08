import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { CollectionGalleryController } from './collection-gallery.controller';
import { CollectionGalleryService } from './collection-gallery.service';

@Module({
  imports: [PrismaModule],
  controllers: [CollectionGalleryController],
  providers: [CollectionGalleryService],
})
export class CollectionGalleryModule {}
