import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateContactMessageDto } from './dto/create-contact.dto';

@Injectable()
export class ContactMessageService {
  constructor(private readonly prisma: PrismaService) {}

  create(createContactMessageDto: CreateContactMessageDto) {
    return this.prisma.contactMessage.create({
      data: createContactMessageDto,
    });
  }

  findAll() {
    return this.prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const contactMessage = await this.prisma.contactMessage.findUnique({
      where: {
        id,
      },
    });

    if (!contactMessage) {
      throw new NotFoundException('Contact Message tidak ditemukan');
    }

    return contactMessage;
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.contactMessage.delete({
      where: {
        id,
      },
    });
  }
}
