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

import { CollectionGalleryService } from './collection-gallery.service';

import { CreateCollectionGalleryDto } from './dto/create-collection-gallery.dto';
import { UpdateCollectionGalleryDto } from './dto/update-collection-gallery.dto';

@Controller('collection-gallery')
export class CollectionGalleryController {
  constructor(
    private readonly collectionGalleryService: CollectionGalleryService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateCollectionGalleryDto) {
    return this.collectionGalleryService.create(dto);
  }

  @Get()
  findAll() {
    return this.collectionGalleryService.findAll();
  }

  @Get('detail/:detailId')
  findByDetail(
    @Param('detailId', ParseIntPipe)
    detailId: number,
  ) {
    return this.collectionGalleryService.findByDetail(detailId);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.collectionGalleryService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body()
    dto: UpdateCollectionGalleryDto,
  ) {
    return this.collectionGalleryService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.collectionGalleryService.remove(id);
  }
}
