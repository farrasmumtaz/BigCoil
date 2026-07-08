import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';

import { CollectionCategoryController } from './collection-category.controller';
import { CollectionCategoryService } from './collection-category.service';

@Module({
  imports: [PrismaModule],
  controllers: [CollectionCategoryController],
  providers: [CollectionCategoryService],
})
export class CollectionCategoryModule {}
