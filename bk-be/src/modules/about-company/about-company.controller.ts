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

import { AboutCompanyService } from './about-company.service';
import { CreateAboutCompanyDto } from './dto/create-about-company.dto';
import { UpdateAboutCompanyDto } from './dto/update-about-company.dto';

@Controller('about-company')
export class AboutCompanyController {
  constructor(private readonly aboutCompanyService: AboutCompanyService) {}

  @Get()
  findAll() {
    return this.aboutCompanyService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.aboutCompanyService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body()
    dto: CreateAboutCompanyDto,
  ) {
    return this.aboutCompanyService.create(dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateAboutCompanyDto,
  ) {
    return this.aboutCompanyService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.aboutCompanyService.remove(id);
  }
}
