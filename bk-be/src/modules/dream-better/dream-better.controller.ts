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

import { DreamBetterService } from './dream-better.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateDreamBetterDto } from './dto/create-dream-better.dto';
import { UpdateDreamBetterDto } from './dto/update-dream-better.dto';

@Controller('dream-better')
export class DreamBetterController {
  constructor(private readonly dreamBetterService: DreamBetterService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateDreamBetterDto) {
    return this.dreamBetterService.create(dto);
  }

  @Get()
  findAll() {
    return this.dreamBetterService.findAll();
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.dreamBetterService.findBySlug(slug);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dreamBetterService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDreamBetterDto,
  ) {
    return this.dreamBetterService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dreamBetterService.remove(id);
  }
}
