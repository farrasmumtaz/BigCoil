import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';

@Injectable()
export class TechnologyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTechnologyDto: CreateTechnologyDto) {
    return this.prisma.technology.create({
      data: createTechnologyDto,
    });
  }

  findAll() {
    return this.prisma.technology.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.technology.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
    return this.prisma.technology.update({
      where: {
        id,
      },
      data: updateTechnologyDto,
    });
  }

  remove(id: number) {
    return this.prisma.technology.delete({
      where: {
        id,
      },
    });
  }
}
