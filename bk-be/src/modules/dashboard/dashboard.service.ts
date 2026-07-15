import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findDashboard() {
    const [
      company,
      hero,
      collectionCategory,
      collection,
      collectionDetail,
      product,
      technology,
      dreamBetter,
      dreamBetterSection,
      exhibition,
      dealer,
      contact,
      testimonial,
      recentContacts,
      upcomingExhibitions,
    ] = await Promise.all([
      this.prisma.company.count(),

      this.prisma.hero.count(),

      this.prisma.collectionCategory.count(),

      this.prisma.collection.count(),

      this.prisma.collectionDetail.count(),

      this.prisma.product.count(),

      this.prisma.technology.count(),

      this.prisma.dreamBetter.count(),

      this.prisma.dreamBetterSection.count(),

      this.prisma.exhibition.count(),

      this.prisma.dealer.count(),

      this.prisma.contactMessage.count(),

      this.prisma.testimonial.count(),

      this.prisma.contactMessage.findMany({
        take: 5,

        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.exhibition.findMany({
        where: {
          eventDate: {
            gte: new Date(),
          },
        },

        orderBy: {
          eventDate: 'asc',
        },

        take: 5,
      }),
    ]);

    return {
      stats: {
        company,
        hero,
        collectionCategory,
        collection,
        collectionDetail,
        product,
        technology,
        dreamBetter,
        dreamBetterSection,
        exhibition,
        dealer,
        contact,
        testimonial,
      },

      recentContacts,

      upcomingExhibitions,
    };
  }
}
