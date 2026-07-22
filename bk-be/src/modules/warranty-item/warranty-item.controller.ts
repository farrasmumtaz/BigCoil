import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { WarrantyItemService } from './warranty-item.service';
import { CreateWarrantyItemDto } from './dto/create-warranty-item.dto';
import { UpdateWarrantyItemDto } from './dto/update-warranty-item.dto';

@Controller('warranty-item')
export class WarrantyItemController {
  constructor(private readonly warrantyItemService: WarrantyItemService) {}

  @Post()
  create(@Body() dto: CreateWarrantyItemDto) {
    return this.warrantyItemService.create(dto);
  }

  @Get()
  findAll() {
    return this.warrantyItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.warrantyItemService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWarrantyItemDto,
  ) {
    return this.warrantyItemService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.warrantyItemService.remove(id);
  }
}
