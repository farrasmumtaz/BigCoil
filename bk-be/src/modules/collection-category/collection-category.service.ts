import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateCollectionCategoryDto } from './dto/create-collection-category.dto';
import { UpdateCollectionCategoryDto } from './dto/update-collection-category.dto';

@Injectable()
export class CollectionCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCollectionCategoryDto) {
    return this.prisma.collectionCategory.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.collectionCategory.findMany({
      include: {
        collections: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.collectionCategory.findUnique({
      where: {
        id,
      },
      include: {
        collections: true,
      },
    });
  }

  update(id: number, dto: UpdateCollectionCategoryDto) {
    return this.prisma.collectionCategory.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.collectionCategory.delete({
      where: {
        id,
      },
    });
  }
}
