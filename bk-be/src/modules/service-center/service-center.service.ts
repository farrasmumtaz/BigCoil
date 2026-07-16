import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateServiceCenterDto } from './dto/create-service-center.dto';
import { UpdateServiceCenterDto } from './dto/update-service-center.dto';

@Injectable()
export class ServiceCenterService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateServiceCenterDto) {
    return this.prisma.serviceCenter.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.serviceCenter.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.serviceCenter.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, dto: UpdateServiceCenterDto) {
    return this.prisma.serviceCenter.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.serviceCenter.delete({
      where: {
        id,
      },
    });
  }

  async findIslands() {
    const islands = await this.prisma.serviceCenter.findMany({
      distinct: ['island'],
      select: {
        island: true,
      },
      orderBy: {
        island: 'asc',
      },
    });

    return islands.map((item) => item.island);
  }

  async findCities(island: string) {
    const cities = await this.prisma.serviceCenter.findMany({
      where: {
        island,
      },
      distinct: ['city'],
      select: {
        city: true,
      },
      orderBy: {
        city: 'asc',
      },
    });

    return cities.map((item) => item.city);
  }

  findByCity(city: string) {
    return this.prisma.serviceCenter.findMany({
      where: {
        city,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
