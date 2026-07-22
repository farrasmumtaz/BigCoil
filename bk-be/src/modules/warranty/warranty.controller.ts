import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { WarrantyService } from './warranty.service';
import { UpdateWarrantyDto } from './dto/update-warranty.dto';

@Controller('warranty')
@UseGuards(JwtAuthGuard)
export class WarrantyController {
  constructor(private readonly warrantyService: WarrantyService) {}

  @Get()
  find() {
    return this.warrantyService.find();
  }

  @Patch()
  update(@Body() dto: UpdateWarrantyDto) {
    return this.warrantyService.update(dto);
  }
}
