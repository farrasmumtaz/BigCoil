import { Module } from '@nestjs/common';
import { WarrantyItemService } from './warranty-item.service';
import { WarrantyItemController } from './warranty-item.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WarrantyItemController],
  providers: [WarrantyItemService],
})
export class WarrantyItemModule {}
