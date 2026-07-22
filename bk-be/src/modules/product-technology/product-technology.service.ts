import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateProductTechnologyDto } from './dto/create-product-technology.dto';
import { UpdateProductTechnologyDto } from './dto/update-product-technology.dto';

@Injectable()
export class ProductTechnologyService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductTechnologyDto) {
    return this.prisma.productTechnology.create({
      data: dto,
      include: {
        product: true,
        technology: true,
      },
    });
  }

  findAll() {
    return this.prisma.productTechnology.findMany({
      include: {
        product: true,
        technology: true,
      },
      orderBy: [
        {
          productId: 'asc',
        },
        {
          sortOrder: 'asc',
        },
      ],
    });
  }

  findByProduct(productId: number) {
    return this.prisma.productTechnology.findMany({
      where: {
        productId,
      },
      include: {
        technology: true,
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const productTechnology = await this.prisma.productTechnology.findUnique({
      where: {
        id,
      },
      include: {
        product: true,
        technology: true,
      },
    });

    if (!productTechnology) {
      throw new NotFoundException('Product Technology tidak ditemukan');
    }

    return productTechnology;
  }

  async update(id: number, dto: UpdateProductTechnologyDto) {
    await this.findOne(id);

    return this.prisma.productTechnology.update({
      where: {
        id,
      },
      data: dto,
      include: {
        product: true,
        technology: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.productTechnology.delete({
      where: {
        id,
      },
    });
  }
}
