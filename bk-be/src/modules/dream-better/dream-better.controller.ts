import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  findOne(@Param('id') id: string) {
    return this.dreamBetterService.findOne(Number(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() dto: UpdateDreamBetterDto) {
    return this.dreamBetterService.update(Number(id), dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.dreamBetterService.remove(Number(id));
  }
}
