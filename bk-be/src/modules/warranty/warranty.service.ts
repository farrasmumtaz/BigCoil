import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateWarrantyDto } from './dto/update-warranty.dto';

@Injectable()
export class WarrantyService {
  constructor(private readonly prisma: PrismaService) {}

  async find() {
    const warranty = await this.prisma.warranty.findFirst();

    if (!warranty) {
      throw new NotFoundException('Warranty not found');
    }

    return warranty;
  }

  async update(dto: UpdateWarrantyDto) {
    const warranty = await this.prisma.warranty.findFirst();

    if (!warranty) {
      throw new NotFoundException('Warranty not found');
    }

    return this.prisma.warranty.update({
      where: {
        id: warranty.id,
      },
      data: {
        title: dto.title,
        description: dto.description,
        heroImage: dto.heroImage,
      },
    });
  }
}
