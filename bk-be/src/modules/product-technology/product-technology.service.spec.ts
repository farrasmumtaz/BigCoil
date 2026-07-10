import { Test, TestingModule } from '@nestjs/testing';
import { ProductTechnologyService } from './product-technology.service';

describe('ProductTechnologyService', () => {
  let service: ProductTechnologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTechnologyService],
    }).compile();

    service = module.get<ProductTechnologyService>(ProductTechnologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
