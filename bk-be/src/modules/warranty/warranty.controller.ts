import { Body, Controller, Get, Patch } from '@nestjs/common';
import { WarrantyService } from './warranty.service';
import { UpdateWarrantyDto } from './dto/update-warranty.dto';

@Controller('warranty')
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
