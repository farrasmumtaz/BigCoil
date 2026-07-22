import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHeroDto: CreateHeroDto) {
    return this.prisma.hero.create({
      data: createHeroDto,
    });
  }

  findAll() {
    return this.prisma.hero.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const hero = await this.prisma.hero.findUnique({
      where: {
        id,
      },
    });

    if (!hero) {
      throw new NotFoundException('Hero tidak ditemukan');
    }

    return hero;
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    await this.findOne(id);

    return this.prisma.hero.update({
      where: {
        id,
      },
      data: updateHeroDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.hero.delete({
      where: {
        id,
      },
    });
  }
}
