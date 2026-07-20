import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WarrantyItemService } from './warranty-item.service';
import { CreateWarrantyItemDto } from './dto/create-warranty-item.dto';
import { UpdateWarrantyItemDto } from './dto/update-warranty-item.dto';

@Controller('warranty-item')
export class WarrantyItemController {
  constructor(private readonly warrantyItemService: WarrantyItemService) {}

  @Post()
  create(@Body() createWarrantyItemDto: CreateWarrantyItemDto) {
    return this.warrantyItemService.create(createWarrantyItemDto);
  }

  @Get()
  findAll() {
    return this.warrantyItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warrantyItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarrantyItemDto: UpdateWarrantyItemDto) {
    return this.warrantyItemService.update(+id, updateWarrantyItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warrantyItemService.remove(+id);
  }
}
