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

import { AboutBrandService } from './about-brand.service';
import { CreateAboutBrandDto } from './dto/create-about-brand.dto';
import { UpdateAboutBrandDto } from './dto/update-about-brand.dto';

@Controller('about-brand')
export class AboutBrandController {
  constructor(private readonly aboutBrandService: AboutBrandService) {}

  @Get()
  findAll() {
    return this.aboutBrandService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.aboutBrandService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body()
    dto: CreateAboutBrandDto,
  ) {
    return this.aboutBrandService.create(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateAboutBrandDto,
  ) {
    return this.aboutBrandService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.aboutBrandService.remove(id);
  }
}
