import { Test, TestingModule } from '@nestjs/testing';
import { ProductTechnologyController } from './product-technology.controller';
import { ProductTechnologyService } from './product-technology.service';

describe('ProductTechnologyController', () => {
  let controller: ProductTechnologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTechnologyController],
      providers: [ProductTechnologyService],
    }).compile();

    controller = module.get<ProductTechnologyController>(ProductTechnologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
