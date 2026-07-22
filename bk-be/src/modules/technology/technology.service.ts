import { Injectable, NotFoundException } from '@nestjs/common';
import { TechnologyType } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';

@Injectable()
export class TechnologyService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTechnologyDto) {
    return this.prisma.technology.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.technology.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findCoil() {
    return this.prisma.technology.findMany({
      where: {
        type: TechnologyType.COIL,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findFoam() {
    return this.prisma.technology.findMany({
      where: {
        type: TechnologyType.FOAM,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const technology = await this.prisma.technology.findUnique({
      where: {
        id,
      },
    });

    if (!technology) {
      throw new NotFoundException('Technology tidak ditemukan');
    }

    return technology;
  }

  async update(id: number, dto: UpdateTechnologyDto) {
    await this.findOne(id);

    return this.prisma.technology.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.technology.delete({
      where: {
        id,
      },
    });
  }
}
