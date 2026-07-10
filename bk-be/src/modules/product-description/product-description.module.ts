import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ProductDescriptionController } from './product-description.controller';
import { ProductDescriptionService } from './product-description.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService],
})
export class ProductDescriptionModule {}
