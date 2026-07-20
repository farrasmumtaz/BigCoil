import { Injectable } from '@nestjs/common';
import { CreateWarrantyItemDto } from './dto/create-warranty-item.dto';
import { UpdateWarrantyItemDto } from './dto/update-warranty-item.dto';

@Injectable()
export class WarrantyItemService {
  create(createWarrantyItemDto: CreateWarrantyItemDto) {
    return 'This action adds a new warrantyItem';
  }

  findAll() {
    return `This action returns all warrantyItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warrantyItem`;
  }

  update(id: number, updateWarrantyItemDto: UpdateWarrantyItemDto) {
    return `This action updates a #${id} warrantyItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} warrantyItem`;
  }
}
