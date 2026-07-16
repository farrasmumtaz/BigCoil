import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { UpdateServiceSettingDto } from './dto/update-service-setting.dto';

@Injectable()
export class ServiceSettingService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne() {
    let setting = await this.prisma.serviceSetting.findUnique({
      where: {
        id: 1,
      },
    });

    if (!setting) {
      setting = await this.prisma.serviceSetting.create({
        data: {
          id: 1,
          embedUrl: '',
        },
      });
    }

    return setting;
  }

  async update(dto: UpdateServiceSettingDto) {
    await this.findOne();

    return this.prisma.serviceSetting.update({
      where: {
        id: 1,
      },
      data: {
        embedUrl: dto.embedUrl,
      },
    });
  }
}
