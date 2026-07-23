import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        ...dto,
        publishDate: new Date(dto.publishDate),
      },
    });
  }

  findAll() {
    return this.prisma.article.findMany({
      orderBy: [
        {
          sortOrder: 'asc',
        },
        {
          publishDate: 'desc',
        },
      ],
    });
  }

  findByCategory(category: string) {
    return this.prisma.article.findMany({
      where: {
        category,
      },
      orderBy: [
        {
          sortOrder: 'asc',
        },
        {
          publishDate: 'desc',
        },
      ],
    });
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  async findCategories() {
    const categories = await this.prisma.article.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
      orderBy: {
        category: 'asc',
      },
    });

    return categories.map((item) => ({
      name: item.category,
    }));
  }

  update(id: number, dto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.publishDate && {
          publishDate: new Date(dto.publishDate),
        }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
