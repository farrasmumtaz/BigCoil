import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateWarrantyItemDto } from './dto/create-warranty-item.dto';
import { UpdateWarrantyItemDto } from './dto/update-warranty-item.dto';

@Injectable()
export class WarrantyItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateWarrantyItemDto) {
    return await this.prisma.warrantyItem.create({
      data: {
        warrantyId: dto.warrantyId,
        title: dto.title,
        description: dto.description,
        image: dto.image,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
  }

  async findAll() {
    return await this.prisma.warrantyItem.findMany({
      include: {
        warranty: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const item = await this.prisma.warrantyItem.findUnique({
      where: { id },
      include: {
        warranty: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!item) {
      throw new NotFoundException('Warranty item not found');
    }

    return item;
  }

  async update(id: number, dto: UpdateWarrantyItemDto) {
    await this.findOne(id);

    return this.prisma.warrantyItem.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.warrantyItem.delete({
      where: { id },
    });
  }
}
