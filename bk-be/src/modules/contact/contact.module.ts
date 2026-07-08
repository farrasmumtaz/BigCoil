import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { ContactMessageController } from './contact.controller';
import { ContactMessageService } from './contact.service';

@Module({
  imports: [PrismaModule],
  controllers: [ContactMessageController],
  providers: [ContactMessageService],
})
export class ContactModule {}
