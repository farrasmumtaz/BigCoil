import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { TechnologyController } from './technology.controller';
import { TechnologyService } from './technology.service';

@Module({
  imports: [PrismaModule],
  controllers: [TechnologyController],
  providers: [TechnologyService],
})
export class TechnologyModule {}
