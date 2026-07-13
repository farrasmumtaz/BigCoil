import { Test, TestingModule } from '@nestjs/testing';
import { DreamBetterSectionController } from './dream-better-section.controller';
import { DreamBetterSectionService } from './dream-better-section.service';

describe('DreamBetterSectionController', () => {
  let controller: DreamBetterSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreamBetterSectionController],
      providers: [DreamBetterSectionService],
    }).compile();

    controller = module.get<DreamBetterSectionController>(DreamBetterSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
