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

import { DealerService } from './dealer.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('dealer')
export class DealerController {
  constructor(private readonly dealerService: DealerService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createDealerDto: CreateDealerDto) {
    return this.dealerService.create(createDealerDto);
  }

  @Get()
  findAll() {
    return this.dealerService.findAll();
  }

  @Get('islands')
  findIslands() {
    return this.dealerService.findIslands();
  }

  @Get('island/:island')
  findCities(@Param('island') island: string) {
    return this.dealerService.findCities(island);
  }

  @Get('city/:city')
  findByCity(@Param('city') city: string) {
    return this.dealerService.findByCity(city);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dealerService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDealerDto: UpdateDealerDto,
  ) {
    return this.dealerService.update(id, updateDealerDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dealerService.remove(id);
  }
}
