import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateCollectionGalleryDto } from './dto/create-collection-gallery.dto';
import { UpdateCollectionGalleryDto } from './dto/update-collection-gallery.dto';

@Injectable()
export class CollectionGalleryService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCollectionGalleryDto) {
    return this.prisma.collectionGallery.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.collectionGallery.findMany({
      include: {
        detail: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findByDetail(detailId: number) {
    return this.prisma.collectionGallery.findMany({
      where: {
        detailId,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.collectionGallery.findUnique({
      where: {
        id,
      },
      include: {
        detail: true,
      },
    });
  }

  update(id: number, dto: UpdateCollectionGalleryDto) {
    return this.prisma.collectionGallery.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.collectionGallery.delete({
      where: {
        id,
      },
    });
  }
}
