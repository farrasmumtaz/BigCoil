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
        description: dto.description,
        videoUrl: dto.videoUrl,

        collection: {
          connect: {
            id: dto.collectionId,
          },
        },
      },
      include: {
        collection: true,
        gallery: true,
      },
    });
  }

  findAll() {
    return this.prisma.collectionDetail.findMany({
      include: {
        collection: true,
        gallery: true,
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
        gallery: true,
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
        gallery: true,
      },
    });
  }

  update(id: number, dto: UpdateCollectionDetailDto) {
    return this.prisma.collectionDetail.update({
      where: {
        id,
      },
      data: {
        description: dto.description,
        videoUrl: dto.videoUrl,

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
        gallery: true,
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
