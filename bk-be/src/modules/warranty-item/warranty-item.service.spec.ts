import { Test, TestingModule } from '@nestjs/testing';
import { WarrantyItemService } from './warranty-item.service';

describe('WarrantyItemService', () => {
  let service: WarrantyItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarrantyItemService],
    }).compile();

    service = module.get<WarrantyItemService>(WarrantyItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
