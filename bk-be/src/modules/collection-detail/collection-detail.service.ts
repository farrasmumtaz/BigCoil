import { Injectable, NotFoundException } from '@nestjs/common';

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

  async findOne(id: number) {
    const collectionDetail = await this.prisma.collectionDetail.findUnique({
      where: {
        id,
      },

      include: {
        collection: true,
      },
    });

    if (!collectionDetail) {
      throw new NotFoundException('Collection Detail tidak ditemukan');
    }

    return collectionDetail;
  }

  async findByCollection(collectionId: number) {
    const collectionDetail = await this.prisma.collectionDetail.findUnique({
      where: {
        collectionId,
      },

      include: {
        collection: true,
      },
    });

    if (!collectionDetail) {
      throw new NotFoundException('Collection Detail tidak ditemukan');
    }

    return collectionDetail;
  }

  async update(id: number, dto: UpdateCollectionDetailDto) {
    await this.findOne(id);

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

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.collectionDetail.delete({
      where: {
        id,
      },
    });
  }
}
