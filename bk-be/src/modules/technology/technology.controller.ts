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

import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';

@Controller('technology')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateTechnologyDto) {
    return this.technologyService.create(dto);
  }

  @Get()
  findAll() {
    return this.technologyService.findAll();
  }

  @Get('coil')
  findCoil() {
    return this.technologyService.findCoil();
  }

  @Get('foam')
  findFoam() {
    return this.technologyService.findFoam();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.technologyService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateTechnologyDto,
  ) {
    return this.technologyService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.technologyService.remove(id);
  }
}
