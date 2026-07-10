import { Injectable } from '@nestjs/common';

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
  findOne(id: number) {
    return this.prisma.collection.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, dto: UpdateCollectionDto) {
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

  remove(id: number) {
    return this.prisma.collection.delete({
      where: {
        id,
      },
    });
  }
}
