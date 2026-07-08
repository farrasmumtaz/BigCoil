import { Test, TestingModule } from '@nestjs/testing';
import { DreamBetterService } from './dream-better.service';

describe('DreamBetterService', () => {
  let service: DreamBetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DreamBetterService],
    }).compile();

    service = module.get<DreamBetterService>(DreamBetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
