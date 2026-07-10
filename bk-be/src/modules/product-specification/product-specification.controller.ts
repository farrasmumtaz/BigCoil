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

import { ProductSpecificationService } from './product-specification.service';
import { CreateProductSpecificationDto } from './dto/create-product-specification.dto';
import { UpdateProductSpecificationDto } from './dto/update-product-specification.dto';

@Controller('product-specification')
export class ProductSpecificationController {
  constructor(
    private readonly productSpecificationService: ProductSpecificationService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateProductSpecificationDto) {
    return this.productSpecificationService.create(dto);
  }

  @Get()
  findAll() {
    return this.productSpecificationService.findAll();
  }

  @Get('product/:productId')
  findByProduct(
    @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    return this.productSpecificationService.findByProduct(productId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productSpecificationService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body()
    dto: UpdateProductSpecificationDto,
  ) {
    return this.productSpecificationService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productSpecificationService.remove(id);
  }
}
