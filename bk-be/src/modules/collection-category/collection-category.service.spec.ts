import { Test, TestingModule } from '@nestjs/testing';
import { CollectionCategoryService } from './collection-category.service';

describe('CollectionCategoryService', () => {
  let service: CollectionCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionCategoryService],
    }).compile();

    service = module.get<CollectionCategoryService>(CollectionCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
