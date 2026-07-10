import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ProductDescriptionService } from './product-description.service';
import { CreateProductDescriptionDto } from './dto/create-product-description.dto';
import { UpdateProductDescriptionDto } from './dto/update-product-description.dto';

@Controller('product-description')
export class ProductDescriptionController {
  constructor(
    private readonly productDescriptionService: ProductDescriptionService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateProductDescriptionDto) {
    return this.productDescriptionService.create(dto);
  }

  @Get()
  findAll() {
    return this.productDescriptionService.findAll();
  }

  @Get('product/:productId')
  findByProduct(
    @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    return this.productDescriptionService.findByProduct(productId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productDescriptionService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() dto: UpdateProductDescriptionDto,
  ) {
    return this.productDescriptionService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productDescriptionService.remove(id);
  }
}
