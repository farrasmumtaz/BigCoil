import { Test, TestingModule } from '@nestjs/testing';
import { CollectionDetailService } from './collection-detail.service';

describe('CollectionDetailService', () => {
  let service: CollectionDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionDetailService],
    }).compile();

    service = module.get<CollectionDetailService>(CollectionDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
