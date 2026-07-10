import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateCollectionDetailDto } from './dto/create-collection-detail.dto';
import { UpdateCollectionDetailDto } from './dto/update-collection-detail.dto';

@Injectable()
export class CollectionDetailService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCollectionDetailDto) {
    return this.prisma.collectionDetail.create({
      data: {
        heroTitle: dto.heroTitle,
        heroDescription: dto.heroDescription,
        heroImage: dto.heroImage,

        collection: {
          connect: {
            id: dto.collectionId,
          },
        },
      },

      include: {
        collection: true,
      },
    });
  }

  findAll() {
    return this.prisma.collectionDetail.findMany({
      include: {
        collection: true,
      },

      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.collectionDetail.findUnique({
      where: {
        id,
      },

      include: {
        collection: true,
      },
    });
  }

  findByCollection(collectionId: number) {
    return this.prisma.collectionDetail.findUnique({
      where: {
        collectionId,
      },

      include: {
        collection: true,
      },
    });
  }

  update(id: number, dto: UpdateCollectionDetailDto) {
    return this.prisma.collectionDetail.update({
      where: {
        id,
      },

      data: {
        heroTitle: dto.heroTitle,
        heroDescription: dto.heroDescription,
        heroImage: dto.heroImage,

        ...(dto.collectionId && {
          collection: {
            connect: {
              id: dto.collectionId,
            },
          },
        }),
      },

      include: {
        collection: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.collectionDetail.delete({
      where: {
        id,
      },
    });
  }
}
