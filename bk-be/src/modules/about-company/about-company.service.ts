import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAboutCompanyDto } from './dto/create-about-company.dto';
import { UpdateAboutCompanyDto } from './dto/update-about-company.dto';

@Injectable()
export class AboutCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAboutCompanyDto) {
    return this.prisma.aboutCompany.create({
      data: {
        title: dto.title,
        subtitle: dto.subtitle,
        description: dto.description,
        image: dto.image,
      },
    });
  }

  findAll() {
    return this.prisma.aboutCompany.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const about = await this.prisma.aboutCompany.findUnique({
      where: {
        id,
      },
    });

    if (!about) {
      throw new NotFoundException('About Company tidak ditemukan');
    }

    return about;
  }

  async update(id: number, dto: UpdateAboutCompanyDto) {
    await this.findOne(id);

    return this.prisma.aboutCompany.update({
      where: {
        id,
      },
      data: {
        ...(dto.title && {
          title: dto.title,
        }),

        ...(dto.subtitle && {
          subtitle: dto.subtitle,
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

    return this.prisma.aboutCompany.delete({
      where: {
        id,
      },
    });
  }
}
