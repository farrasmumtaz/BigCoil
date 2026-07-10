import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAboutBrandDto } from './dto/create-about-brand.dto';
import { UpdateAboutBrandDto } from './dto/update-about-brand.dto';

@Injectable()
export class AboutBrandService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAboutBrandDto) {
    return this.prisma.aboutBrand.create({
      data: {
        title: dto.title,
        description: dto.description,
        image: dto.image,
      },
    });
  }

  findAll() {
    return this.prisma.aboutBrand.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const about = await this.prisma.aboutBrand.findUnique({
      where: {
        id,
      },
    });

    if (!about) {
      throw new NotFoundException('About Brand tidak ditemukan');
    }

    return about;
  }

  async update(id: number, dto: UpdateAboutBrandDto) {
    await this.findOne(id);

    return this.prisma.aboutBrand.update({
      where: {
        id,
      },
      data: {
        ...(dto.title && {
          title: dto.title,
        }),

        ...(dto.description && {
          description: dto.description,
        }),

        ...(dto.image && {
          image: dto.image,
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.aboutBrand.delete({
      where: {
        id,
      },
    });
  }
}
