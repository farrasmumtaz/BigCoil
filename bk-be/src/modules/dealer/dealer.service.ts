import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';

@Injectable()
export class DealerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDealerDto: CreateDealerDto) {
    return this.prisma.dealer.create({
      data: createDealerDto,
    });
  }

  findAll() {
    return this.prisma.dealer.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.dealer.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateDealerDto: UpdateDealerDto) {
    return this.prisma.dealer.update({
      where: {
        id,
      },
      data: updateDealerDto,
    });
  }

  remove(id: number) {
    return this.prisma.dealer.delete({
      where: {
        id,
      },
    });
  }

  async findIslands() {
    const islands = await this.prisma.dealer.findMany({
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
    const cities = await this.prisma.dealer.findMany({
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

  async findByCity(city: string) {
    return this.prisma.dealer.findMany({
      where: {
        city,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
