import { Test, TestingModule } from '@nestjs/testing';
import { CollectionCategoryController } from './collection-category.controller';
import { CollectionCategoryService } from './collection-category.service';

describe('CollectionCategoryController', () => {
  let controller: CollectionCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionCategoryController],
      providers: [CollectionCategoryService],
    }).compile();

    controller = module.get<CollectionCategoryController>(CollectionCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
