import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { CreateExhibitionDto } from './dto/create-exhibition.dto';
import { UpdateExhibitionDto } from './dto/update-exhibition.dto';

@Injectable()
export class ExhibitionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateExhibitionDto) {
    return this.prisma.exhibition.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        location: dto.location,
        mapsUrl: dto.mapsUrl || null,
        eventDate: new Date(dto.eventDate),
        description: dto.description,
        coverImage: dto.coverImage,
      },
    });
  }

  findAll() {
    return this.prisma.exhibition.findMany({
      orderBy: {
        eventDate: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const exhibition = await this.prisma.exhibition.findUnique({
      where: {
        id,
      },
    });

    if (!exhibition) {
      throw new NotFoundException('Exhibition tidak ditemukan');
    }

    return exhibition;
  }

  async findBySlug(slug: string) {
    const exhibition = await this.prisma.exhibition.findUnique({
      where: {
        slug,
      },
    });

    if (!exhibition) {
      throw new NotFoundException('Exhibition tidak ditemukan');
    }

    return exhibition;
  }

  async update(id: number, dto: UpdateExhibitionDto) {
    await this.findOne(id);

    return this.prisma.exhibition.update({
      where: {
        id,
      },
      data: {
        ...(dto.title && {
          title: dto.title,
        }),

        ...(dto.slug && {
          slug: dto.slug,
        }),

        ...(dto.location && {
          location: dto.location,
        }),

        ...(dto.mapsUrl !== undefined && {
          mapsUrl: dto.mapsUrl || null,
        }),

        ...(dto.eventDate && {
          eventDate: new Date(dto.eventDate),
        }),

        ...(dto.description && {
          description: dto.description,
        }),

        ...(dto.coverImage && {
          coverImage: dto.coverImage,
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.exhibition.delete({
      where: {
        id,
      },
    });
  }
}
