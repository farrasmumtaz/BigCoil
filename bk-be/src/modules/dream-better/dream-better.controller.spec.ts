import { Test, TestingModule } from '@nestjs/testing';
import { DreamBetterController } from './dream-better.controller';
import { DreamBetterService } from './dream-better.service';

describe('DreamBetterController', () => {
  let controller: DreamBetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreamBetterController],
      providers: [DreamBetterService],
    }).compile();

    controller = module.get<DreamBetterController>(DreamBetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
