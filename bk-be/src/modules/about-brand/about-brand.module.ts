import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { AboutBrandController } from './about-brand.controller';
import { AboutBrandService } from './about-brand.service';

@Module({
  imports: [PrismaModule],
  controllers: [AboutBrandController],
  providers: [AboutBrandService],
})
export class AboutBrandModule {}
