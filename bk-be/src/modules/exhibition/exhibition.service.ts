import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.prisma.exhibition.findUnique({
      where: {
        id,
      },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.exhibition.findUnique({
      where: {
        slug,
      },
    });
  }

  update(id: number, dto: UpdateExhibitionDto) {
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

  remove(id: number) {
    return this.prisma.exhibition.delete({
      where: {
        id,
      },
    });
  }
}
