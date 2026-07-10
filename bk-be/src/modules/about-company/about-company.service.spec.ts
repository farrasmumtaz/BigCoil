import { Test, TestingModule } from '@nestjs/testing';
import { AboutCompanyService } from './about-company.service';

describe('AboutCompanyService', () => {
  let service: AboutCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutCompanyService],
    }).compile();

    service = module.get<AboutCompanyService>(AboutCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
