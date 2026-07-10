import { Test, TestingModule } from '@nestjs/testing';
import { AboutCompanyController } from './about-company.controller';
import { AboutCompanyService } from './about-company.service';

describe('AboutCompanyController', () => {
  let controller: AboutCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutCompanyController],
      providers: [AboutCompanyService],
    }).compile();

    controller = module.get<AboutCompanyController>(AboutCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
