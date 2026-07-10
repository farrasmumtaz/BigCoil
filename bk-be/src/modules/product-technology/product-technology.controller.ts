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

import { CreateProductTechnologyDto } from './dto/create-product-technology.dto';
import { UpdateProductTechnologyDto } from './dto/update-product-technology.dto';
import { ProductTechnologyService } from './product-technology.service';

@Controller('product-technology')
export class ProductTechnologyController {
  constructor(
    private readonly productTechnologyService: ProductTechnologyService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateProductTechnologyDto) {
    return this.productTechnologyService.create(dto);
  }

  @Get()
  findAll() {
    return this.productTechnologyService.findAll();
  }

  @Get('product/:productId')
  findByProduct(
    @Param('productId', ParseIntPipe)
    productId: number,
  ) {
    return this.productTechnologyService.findByProduct(productId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productTechnologyService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body()
    dto: UpdateProductTechnologyDto,
  ) {
    return this.productTechnologyService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.productTechnologyService.remove(id);
  }
}
