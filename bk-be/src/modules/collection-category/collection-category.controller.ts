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

import { CollectionCategoryService } from './collection-category.service';

import { CreateCollectionCategoryDto } from './dto/create-collection-category.dto';
import { UpdateCollectionCategoryDto } from './dto/update-collection-category.dto';

@Controller('collection-category')
export class CollectionCategoryController {
  constructor(
    private readonly collectionCategoryService: CollectionCategoryService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateCollectionCategoryDto) {
    return this.collectionCategoryService.create(dto);
  }

  @Get()
  findAll() {
    return this.collectionCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionCategoryService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCollectionCategoryDto,
  ) {
    return this.collectionCategoryService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionCategoryService.remove(id);
  }
}
