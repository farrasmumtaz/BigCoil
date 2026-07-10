import { Test, TestingModule } from '@nestjs/testing';
import { AboutBrandService } from './about-brand.service';

describe('AboutBrandService', () => {
  let service: AboutBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutBrandService],
    }).compile();

    service = module.get<AboutBrandService>(AboutBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
