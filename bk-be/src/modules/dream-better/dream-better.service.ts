import { Injectable } from '@nestjs/common';

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

  findOne(id: number) {
    return this.prisma.dreamBetter.findUnique({
      where: {
        id,
      },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.dreamBetter.findUnique({
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
  }
  update(id: number, updateDreamBetterDto: UpdateDreamBetterDto) {
    return this.prisma.dreamBetter.update({
      where: {
        id,
      },
      data: updateDreamBetterDto,
    });
  }

  remove(id: number) {
    return this.prisma.dreamBetter.delete({
      where: {
        id,
      },
    });
  }
}
