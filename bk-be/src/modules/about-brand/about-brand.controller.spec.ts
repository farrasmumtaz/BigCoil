import { Test, TestingModule } from '@nestjs/testing';
import { AboutBrandController } from './about-brand.controller';
import { AboutBrandService } from './about-brand.service';

describe('AboutBrandController', () => {
  let controller: AboutBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutBrandController],
      providers: [AboutBrandService],
    }).compile();

    controller = module.get<AboutBrandController>(AboutBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
