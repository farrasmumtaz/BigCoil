import { Module } from '@nestjs/common';
import { ProductTechnologyService } from './product-technology.service';
import { ProductTechnologyController } from './product-technology.controller';

@Module({
  controllers: [ProductTechnologyController],
  providers: [ProductTechnologyService],
})
export class ProductTechnologyModule {}
