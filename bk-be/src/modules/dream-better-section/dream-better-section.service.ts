import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.dreamBetterSection.findUnique({
      where: {
        id,
      },
      include: {
        dreamBetter: true,
      },
    });
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

  update(id: number, dto: UpdateDreamBetterSectionDto) {
    return this.prisma.dreamBetterSection.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.dreamBetterSection.delete({
      where: {
        id,
      },
    });
  }
}
