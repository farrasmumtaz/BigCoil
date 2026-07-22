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

import { ServiceCenterService } from './service-center.service';

import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';

@Controller('service-center')
export class ServiceCenterController {
  constructor(private readonly serviceCenterService: ServiceCenterService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateServiceCenterDto) {
    return this.serviceCenterService.create(dto);
  }

  @Get()
  findAll() {
    return this.serviceCenterService.findAll();
  }

  @Get('islands')
  findIslands() {
    return this.serviceCenterService.findIslands();
  }

  @Get('island/:island')
  findCities(@Param('island') island: string) {
    return this.serviceCenterService.findCities(island);
  }

  @Get('city/:city')
  findByCity(@Param('city') city: string) {
    return this.serviceCenterService.findByCity(city);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.serviceCenterService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateServiceCenterDto,
  ) {
    return this.serviceCenterService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serviceCenterService.remove(id);
  }
}
