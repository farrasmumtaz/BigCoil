import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { DreamBetterSectionService } from './dream-better-section.service';

import { CreateDreamBetterSectionDto } from './dto/create-dream-better-section.dto';
import { UpdateDreamBetterSectionDto } from './dto/update-dream-better-section.dto';

@Controller('dream-better-section')
export class DreamBetterSectionController {
  constructor(private readonly service: DreamBetterSectionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateDreamBetterSectionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('dream-better/:id')
  findByDreamBetter(@Param('id') id: string) {
    return this.service.findByDreamBetter(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() dto: UpdateDreamBetterSectionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
