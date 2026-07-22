import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCollectionDto) {
    return this.prisma.collection.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        description: dto.description,
        coverImage: dto.coverImage,

        category: {
          connect: {
            id: dto.categoryId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.collection.findMany({
      include: {
        category: true,
        products: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
  async findBySlug(slug: string) {
    const collection = await this.prisma.collection.findUnique({
      where: {
        slug,
      },
      include: {
        category: true,
        detail: true,
        products: true,
      },
    });

    if (!collection) {
      throw new NotFoundException('Collection tidak ditemukan');
    }

    return collection;
  }
  findRetail() {
    return this.prisma.collection.findMany({
      where: {
        category: {
          slug: 'retail',
        },
      },
      include: {
        category: true,
        products: true,
      },
    });
  }

  findHospitality() {
    return this.prisma.collection.findMany({
      where: {
        category: {
          slug: 'hospitality',
        },
      },
      include: {
        category: true,
        products: true,
      },
    });
  }
  async findOne(id: number) {
    const collection = await this.prisma.collection.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        products: true,
      },
    });

    if (!collection) {
      throw new NotFoundException('Collection tidak ditemukan');
    }

    return collection;
  }

  async update(id: number, dto: UpdateCollectionDto) {
    await this.findOne(id);

    return this.prisma.collection.update({
      where: {
        id,
      },
      data: {
        title: dto.title,
        slug: dto.slug,
        description: dto.description,
        coverImage: dto.coverImage,

        ...(dto.categoryId && {
          category: {
            connect: {
              id: dto.categoryId,
            },
          },
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.collection.delete({
      where: {
        id,
      },
    });
  }
}
