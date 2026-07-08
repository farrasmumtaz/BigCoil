import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './modules/company/company.module';
import { HeroModule } from './modules/hero/hero.module';
import { CollectionModule } from './modules/collection/collection.module';
import { DreamBetterModule } from './modules/dream-better/dream-better.module';
import { TechnologyModule } from './modules/technology/technology.module';
import { TestimonialModule } from './modules/testimonial/testimonial.module';
import { DealerModule } from './modules/dealer/dealer.module';
import { ContactModule } from './modules/contact/contact.module';
import { AuthModule } from './modules/auth/auth.module';
import { UploadModule } from './modules/upload/upload.module';
import { CollectionCategoryModule } from './modules/collection-category/collection-category.module';
import { CollectionDetailModule } from './modules/collection-detail/collection-detail.module';
import { CollectionGalleryModule } from './modules/collection-gallery/collection-gallery.module';

@Module({
  imports: [
    PrismaModule,
    CompanyModule,
    HeroModule,
    CollectionModule,
    DreamBetterModule,
    TechnologyModule,
    TestimonialModule,
    DealerModule,
    ContactModule,
    AuthModule,
    UploadModule,
    CollectionCategoryModule,
    CollectionDetailModule,
    CollectionGalleryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
