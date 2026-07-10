import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateProductSpecificationDto } from './dto/create-product-specification.dto';
import { UpdateProductSpecificationDto } from './dto/update-product-specification.dto';

@Injectable()
export class ProductSpecificationService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductSpecificationDto) {
    return this.prisma.productSpecification.create({
      data: {
        label: dto.label,
        value: dto.value,
        icon: dto.icon,
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
    return this.prisma.productSpecification.findMany({
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
    return this.prisma.productSpecification.findUnique({
      where: {
        id,
      },

      include: {
        product: true,
      },
    });
  }

  findByProduct(productId: number) {
    return this.prisma.productSpecification.findMany({
      where: {
        productId,
      },

      include: {
        product: true,
      },

      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  update(id: number, dto: UpdateProductSpecificationDto) {
    return this.prisma.productSpecification.update({
      where: {
        id,
      },

      data: {
        label: dto.label,
        value: dto.value,
        icon: dto.icon,

        ...(dto.sortOrder !== undefined && {
          sortOrder: dto.sortOrder,
        }),

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
    return this.prisma.productSpecification.delete({
      where: {
        id,
      },
    });
  }
}
