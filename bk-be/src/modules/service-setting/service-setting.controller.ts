import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { ServiceSettingService } from './service-setting.service';

import { UpdateServiceSettingDto } from './dto/update-service-setting.dto';

@Controller('service-setting')
export class ServiceSettingController {
  constructor(private readonly serviceSettingService: ServiceSettingService) {}

  @Get()
  findOne() {
    return this.serviceSettingService.findOne();
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(
    @Body()
    dto: UpdateServiceSettingDto,
  ) {
    return this.serviceSettingService.update(dto);
  }
}
