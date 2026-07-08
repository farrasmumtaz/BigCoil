import { Test, TestingModule } from '@nestjs/testing';
import { CollectionGalleryController } from './collection-gallery.controller';
import { CollectionGalleryService } from './collection-gallery.service';

describe('CollectionGalleryController', () => {
  let controller: CollectionGalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionGalleryController],
      providers: [CollectionGalleryService],
    }).compile();

    controller = module.get<CollectionGalleryController>(CollectionGalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
