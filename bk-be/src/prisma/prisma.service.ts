import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    const db = await this.$queryRawUnsafe(
      'SELECT DATABASE() AS db, @@hostname AS host',
    );

    console.log(db);
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
