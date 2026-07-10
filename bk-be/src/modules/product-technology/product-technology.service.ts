import { Injectable } from '@nestjs/common';
import { CreateProductTechnologyDto } from './dto/create-product-technology.dto';
import { UpdateProductTechnologyDto } from './dto/update-product-technology.dto';

@Injectable()
export class ProductTechnologyService {
  create(createProductTechnologyDto: CreateProductTechnologyDto) {
    return 'This action adds a new productTechnology';
  }

  findAll() {
    return `This action returns all productTechnology`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTechnology`;
  }

  update(id: number, updateProductTechnologyDto: UpdateProductTechnologyDto) {
    return `This action updates a #${id} productTechnology`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTechnology`;
  }
}
