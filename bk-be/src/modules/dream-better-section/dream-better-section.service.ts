import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateDreamBetterSectionDto } from './dto/create-dream-better-section.dto';
import { UpdateDreamBetterSectionDto } from './dto/update-dream-better-section.dto';

@Injectable()
export class DreamBetterSectionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateDreamBetterSectionDto) {
    return this.prisma.dreamBetterSection.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.dreamBetterSection.findMany({
      include: {
        dreamBetter: true,
      },
      orderBy: [
        {
          dreamBetterId: 'asc',
        },
        {
          order: 'asc',
        },
      ],
    });
  }

  async findOne(id: number) {
    const dreamBetterSection = await this.prisma.dreamBetterSection.findUnique({
      where: {
        id,
      },
      include: {
        dreamBetter: true,
      },
    });

    if (!dreamBetterSection) {
      throw new NotFoundException('Dream Better Section tidak ditemukan');
    }

    return dreamBetterSection;
  }

  findByDreamBetter(dreamBetterId: number) {
    return this.prisma.dreamBetterSection.findMany({
      where: {
        dreamBetterId,
      },
      orderBy: {
        order: 'asc',
      },
    });
  }

  async update(id: number, dto: UpdateDreamBetterSectionDto) {
    await this.findOne(id);

    return this.prisma.dreamBetterSection.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.dreamBetterSection.delete({
      where: {
        id,
      },
    });
  }
}
