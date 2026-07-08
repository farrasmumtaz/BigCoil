import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { TestimonialController } from './testimonial.controller';
import { TestimonialService } from './testimonial.service';

@Module({
  imports: [PrismaModule],
  controllers: [TestimonialController],
  providers: [TestimonialService],
})
export class TestimonialModule {}
