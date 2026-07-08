import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.hero.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return this.prisma.hero.update({
      where: {
        id,
      },
      data: updateHeroDto,
    });
  }

  remove(id: number) {
    return this.prisma.hero.delete({
      where: {
        id,
      },
    });
  }
}
