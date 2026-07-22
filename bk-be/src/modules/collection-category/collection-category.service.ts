import { Injectable, NotFoundException } from '@nestjs/common';

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

  async findOne(id: number) {
    const collectionCategory = await this.prisma.collectionCategory.findUnique({
      where: {
        id,
      },
      include: {
        collections: true,
      },
    });

    if (!collectionCategory) {
      throw new NotFoundException('Collection Category tidak ditemukan');
    }

    return collectionCategory;
  }

  async update(id: number, dto: UpdateCollectionCategoryDto) {
    await this.findOne(id);

    return this.prisma.collectionCategory.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.collectionCategory.delete({
      where: {
        id,
      },
    });
  }
}
