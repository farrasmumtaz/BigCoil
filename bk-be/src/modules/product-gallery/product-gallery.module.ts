import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ProductGalleryController } from './product-gallery.controller';
import { ProductGalleryService } from './product-gallery.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductGalleryController],
  providers: [ProductGalleryService],
})
export class ProductGalleryModule {}
