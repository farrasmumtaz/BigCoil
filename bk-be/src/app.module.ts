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
import { AboutCompanyModule } from './modules/about-company/about-company.module';
import { AboutBrandModule } from './modules/about-brand/about-brand.module';
import { ProductModule } from './modules/product/product.module';
import { ProductGalleryModule } from './modules/product-gallery/product-gallery.module';
import { ProductSpecificationModule } from './modules/product-specification/product-specification.module';
import { ProductDescriptionModule } from './modules/product-description/product-description.module';
import { ProductTechnologyModule } from './modules/product-technology/product-technology.module';
import { CollectionDetailModule } from './modules/collection-detail/collection-detail.module';
import { ExhibitionModule } from './modules/exhibition/exhibition.module';
import { DreamBetterSectionModule } from './modules/dream-better-section/dream-better-section.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ServiceCenterModule } from './modules/service-center/service-center.module';
import { ServiceSettingModule } from './modules/service-setting/service-setting.module';
import { WarrantyModule } from './modules/warranty/warranty.module';
import { WarrantyItemModule } from './modules/warranty-item/warranty-item.module';
import { ArticleModule } from './modules/article/article.module';
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
    AboutCompanyModule,
    AboutBrandModule,
    ProductModule,
    ProductGalleryModule,
    ProductSpecificationModule,
    ProductDescriptionModule,
    ProductTechnologyModule,
    CollectionDetailModule,
    ExhibitionModule,
    DreamBetterSectionModule,
    DashboardModule,
    ServiceCenterModule,
    ServiceSettingModule,
    WarrantyModule,
    WarrantyItemModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
