import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTestimonialDto: CreateTestimonialDto) {
    return this.prisma.testimonial.create({
      data: createTestimonialDto,
    });
  }

  findAll() {
    return this.prisma.testimonial.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const testimonial = await this.prisma.testimonial.findUnique({
      where: {
        id,
      },
    });

    if (!testimonial) {
      throw new NotFoundException('Testimonial tidak ditemukan');
    }

    return testimonial;
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    await this.findOne(id);

    return this.prisma.testimonial.update({
      where: {
        id,
      },
      data: updateTestimonialDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.testimonial.delete({
      where: {
        id,
      },
    });
  }
}
