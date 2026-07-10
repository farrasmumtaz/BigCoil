import { Test, TestingModule } from '@nestjs/testing';
import { CollectionDetailController } from './collection-detail.controller';
import { CollectionDetailService } from './collection-detail.service';

describe('CollectionDetailController', () => {
  let controller: CollectionDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionDetailController],
      providers: [CollectionDetailService],
    }).compile();

    controller = module.get<CollectionDetailController>(CollectionDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
