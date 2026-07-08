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

import { CollectionDetailService } from './collection-detail.service';
import { CreateCollectionDetailDto } from './dto/create-collection-detail.dto';
import { UpdateCollectionDetailDto } from './dto/update-collection-detail.dto';

@Controller('collection-detail')
export class CollectionDetailController {
  constructor(
    private readonly collectionDetailService: CollectionDetailService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateCollectionDetailDto) {
    return this.collectionDetailService.create(dto);
  }

  @Get()
  findAll() {
    return this.collectionDetailService.findAll();
  }

  @Get('collection/:collectionId')
  findByCollection(@Param('collectionId', ParseIntPipe) collectionId: number) {
    return this.collectionDetailService.findByCollection(collectionId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionDetailService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCollectionDetailDto,
  ) {
    return this.collectionDetailService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionDetailService.remove(id);
  }
}
