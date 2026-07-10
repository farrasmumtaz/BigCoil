import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateProductGalleryDto } from './dto/create-product-gallery.dto';
import { UpdateProductGalleryDto } from './dto/update-product-gallery.dto';

@Injectable()
export class ProductGalleryService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductGalleryDto) {
    return this.prisma.productGallery.create({
      data: {
        image: dto.image,
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
    return this.prisma.productGallery.findMany({
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
    return this.prisma.productGallery.findUnique({
      where: {
        id,
      },

      include: {
        product: true,
      },
    });
  }

  findByProduct(productId: number) {
    return this.prisma.productGallery.findMany({
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

  update(id: number, dto: UpdateProductGalleryDto) {
    return this.prisma.productGallery.update({
      where: {
        id,
      },

      data: {
        ...(dto.image && {
          image: dto.image,
        }),

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
    return this.prisma.productGallery.delete({
      where: {
        id,
      },
    });
  }
}
