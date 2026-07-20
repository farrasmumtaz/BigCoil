import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateWarrantyDto } from './dto/create-warranty.dto';
import { UpdateWarrantyDto } from './dto/update-warranty.dto';

@Injectable()
export class WarrantyService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateWarrantyDto) {
    return this.prisma.warranty.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.warranty.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const warranty = await this.prisma.warranty.findUnique({
      where: { id },
      include: {
        items: {
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    });

    if (!warranty) {
      throw new NotFoundException('Warranty not found');
    }

    return warranty;
  }

  async update(id: number, dto: UpdateWarrantyDto) {
    await this.findOne(id);

    return this.prisma.warranty.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.warranty.delete({
      where: { id },
    });
  }
}
