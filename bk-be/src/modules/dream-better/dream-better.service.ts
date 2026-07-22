import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateDreamBetterDto } from './dto/create-dream-better.dto';
import { UpdateDreamBetterDto } from './dto/update-dream-better.dto';

@Injectable()
export class DreamBetterService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDreamBetterDto: CreateDreamBetterDto) {
    return this.prisma.dreamBetter.create({
      data: createDreamBetterDto,
    });
  }

  findAll() {
    return this.prisma.dreamBetter.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const dreamBetter = await this.prisma.dreamBetter.findUnique({
      where: {
        id,
      },
    });

    if (!dreamBetter) {
      throw new NotFoundException('Dream Better tidak ditemukan');
    }

    return dreamBetter;
  }

  async findBySlug(slug: string) {
    const dreamBetter = await this.prisma.dreamBetter.findUnique({
      where: {
        slug,
      },
      include: {
        sections: {
          orderBy: {
            order: 'asc',
          },
        },
      },
    });

    if (!dreamBetter) {
      throw new NotFoundException('Dream Better tidak ditemukan');
    }

    return dreamBetter;
  }

  async update(id: number, updateDreamBetterDto: UpdateDreamBetterDto) {
    await this.findOne(id);

    return this.prisma.dreamBetter.update({
      where: {
        id,
      },
      data: updateDreamBetterDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.dreamBetter.delete({
      where: {
        id,
      },
    });
  }
}
