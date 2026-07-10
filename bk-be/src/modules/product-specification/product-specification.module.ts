import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ProductSpecificationController } from './product-specification.controller';
import { ProductSpecificationService } from './product-specification.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductSpecificationController],
  providers: [ProductSpecificationService],
})
export class ProductSpecificationModule {}
