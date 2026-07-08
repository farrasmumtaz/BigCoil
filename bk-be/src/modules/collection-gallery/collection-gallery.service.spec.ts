import { Test, TestingModule } from '@nestjs/testing';
import { CollectionGalleryService } from './collection-gallery.service';

describe('CollectionGalleryService', () => {
  let service: CollectionGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionGalleryService],
    }).compile();

    service = module.get<CollectionGalleryService>(CollectionGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
