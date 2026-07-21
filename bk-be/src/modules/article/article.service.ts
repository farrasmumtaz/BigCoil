import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateArticleDto) {
    return this.prisma.article.create({
      data: dto,
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

  async update(id: number, dto: UpdateArticleDto) {
    await this.findOne(id);

    return this.prisma.article.update({
      where: {
        id,
      },
      data: dto,
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
