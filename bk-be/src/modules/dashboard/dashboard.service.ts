import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findDashboard() {
    const [
      company,
      hero,
      collection,
      product,
      technology,
      dreamBetter,
      exhibition,
      dealer,
      service,
      warranty,
      contact,
      testimonial,
      recentContacts,
      upcomingExhibitions,
      article,
    ] = await Promise.all([
      this.prisma.company.count(),
      this.prisma.hero.count(),
      this.prisma.collection.count(),
      this.prisma.product.count(),
      this.prisma.technology.count(),
      this.prisma.dreamBetter.count(),
      this.prisma.exhibition.count(),
      this.prisma.dealer.count(),
      this.prisma.serviceCenter.count(),
      this.prisma.warranty.count(),
      this.prisma.contactMessage.count(),
      this.prisma.testimonial.count(),
      this.prisma.contactMessage.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.exhibition.findMany({
        where: { eventDate: { gte: new Date() } },
        orderBy: { eventDate: 'asc' },
        take: 5,
      }),
      this.prisma.article.count(),
    ]);

    return {
      stats: {
        company,
        hero,
        collection,
        product,
        technology,
        dreamBetter,
        exhibition,
        dealer,
        service,
        warranty,
        contact,
        testimonial,
        article,
      },
      recentContacts,
      upcomingExhibitions,
    };
  }
}
