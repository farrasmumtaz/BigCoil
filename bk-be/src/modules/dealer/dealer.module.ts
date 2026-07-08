import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { DealerController } from './dealer.controller';
import { DealerService } from './dealer.service';

@Module({
  imports: [PrismaModule],
  controllers: [DealerController],
  providers: [DealerService],
})
export class DealerModule {}
