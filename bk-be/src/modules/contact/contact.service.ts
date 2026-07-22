import { Injectable } from '@nestjs/common';

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

  findOne(id: number) {
    return this.prisma.contactMessage.findUnique({
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.contactMessage.delete({
      where: {
        id,
      },
    });
  }
}
