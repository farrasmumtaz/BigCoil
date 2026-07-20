import { Test, TestingModule } from '@nestjs/testing';
import { WarrantyItemController } from './warranty-item.controller';
import { WarrantyItemService } from './warranty-item.service';

describe('WarrantyItemController', () => {
  let controller: WarrantyItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarrantyItemController],
      providers: [WarrantyItemService],
    }).compile();

    controller = module.get<WarrantyItemController>(WarrantyItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
