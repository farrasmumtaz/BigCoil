import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { AboutCompanyController } from './about-company.controller';
import { AboutCompanyService } from './about-company.service';

@Module({
  imports: [PrismaModule],
  controllers: [AboutCompanyController],
  providers: [AboutCompanyService],
})
export class AboutCompanyModule {}
