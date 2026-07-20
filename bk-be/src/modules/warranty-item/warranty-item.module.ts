import { Module } from '@nestjs/common';
import { WarrantyItemService } from './warranty-item.service';
import { WarrantyItemController } from './warranty-item.controller';

@Module({
  controllers: [WarrantyItemController],
  providers: [WarrantyItemService],
})
export class WarrantyItemModule {}
