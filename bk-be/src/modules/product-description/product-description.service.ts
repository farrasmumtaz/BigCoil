import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateProductDescriptionDto } from './dto/create-product-description.dto';
import { UpdateProductDescriptionDto } from './dto/update-product-description.dto';

@Injectable()
export class ProductDescriptionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductDescriptionDto) {
    return this.prisma.productDescription.create({
      data: {
        title: dto.title,
        description: dto.description,
        sortOrder: dto.sortOrder ?? 0,

        product: {
          connect: {
            id: dto.productId,
          },
        },
      },

      include: {
        product: true,
      },
    });
  }

  findAll() {
    return this.prisma.productDescription.findMany({
      include: {
        product: true,
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

  findOne(id: number) {
    return this.prisma.productDescription.findUnique({
      where: {
        id,
      },

      include: {
        product: true,
      },
    });
  }

  findByProduct(productId: number) {
    return this.prisma.productDescription.findMany({
      where: {
        productId,
      },

      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  update(id: number, dto: UpdateProductDescriptionDto) {
    return this.prisma.productDescription.update({
      where: {
        id,
      },

      data: {
        title: dto.title,
        description: dto.description,
        sortOrder: dto.sortOrder,

        ...(dto.productId && {
          product: {
            connect: {
              id: dto.productId,
            },
          },
        }),
      },

      include: {
        product: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.productDescription.delete({
      where: {
        id,
      },
    });
  }
}
