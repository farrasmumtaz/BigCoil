import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        shortDescription: dto.shortDescription,
        heroImage: dto.heroImage,
        videoUrl: dto.videoUrl,

        collection: {
          connect: {
            id: dto.collectionId,
          },
        },
      },

      include: {
        collection: true,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        collection: true,
        galleries: true,
        descriptions: true,
        productSpecifications: true,
        productTechnologies: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },

      include: {
        collection: true,

        galleries: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productSpecifications: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productTechnologies: {
          include: {
            technology: true,
          },
        },
      },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        collection: true,

        galleries: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        descriptions: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productSpecifications: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productTechnologies: {
          include: {
            technology: true,
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    });
  }

  findByCollection(collectionId: number) {
    return this.prisma.product.findMany({
      where: {
        collectionId,
      },
      include: {
        collection: true,

        galleries: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        descriptions: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productSpecifications: {
          orderBy: {
            sortOrder: 'asc',
          },
        },

        productTechnologies: {
          include: {
            technology: true,
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    });
  }

  update(id: number, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id,
      },

      data: {
        title: dto.title,
        slug: dto.slug,
        shortDescription: dto.shortDescription,
        heroImage: dto.heroImage,
        videoUrl: dto.videoUrl,

        ...(dto.collectionId && {
          collection: {
            connect: {
              id: dto.collectionId,
            },
          },
        }),
      },

      include: {
        collection: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
