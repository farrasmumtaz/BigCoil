import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ProductTechnologyController } from './product-technology.controller';
import { ProductTechnologyService } from './product-technology.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProductTechnologyController],
  providers: [ProductTechnologyService],
})
export class ProductTechnologyModule {}
