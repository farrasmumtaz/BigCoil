import { Test, TestingModule } from '@nestjs/testing';
import { DreamBetterSectionService } from './dream-better-section.service';

describe('DreamBetterSectionService', () => {
  let service: DreamBetterSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DreamBetterSectionService],
    }).compile();

    service = module.get<DreamBetterSectionService>(DreamBetterSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
