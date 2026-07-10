import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTechnologyService } from './product-technology.service';
import { CreateProductTechnologyDto } from './dto/create-product-technology.dto';
import { UpdateProductTechnologyDto } from './dto/update-product-technology.dto';

@Controller('product-technology')
export class ProductTechnologyController {
  constructor(private readonly productTechnologyService: ProductTechnologyService) {}

  @Post()
  create(@Body() createProductTechnologyDto: CreateProductTechnologyDto) {
    return this.productTechnologyService.create(createProductTechnologyDto);
  }

  @Get()
  findAll() {
    return this.productTechnologyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTechnologyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTechnologyDto: UpdateProductTechnologyDto) {
    return this.productTechnologyService.update(+id, updateProductTechnologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTechnologyService.remove(+id);
  }
}
