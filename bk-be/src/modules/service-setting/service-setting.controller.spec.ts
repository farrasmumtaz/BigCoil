import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSettingController } from './service-setting.controller';
import { ServiceSettingService } from './service-setting.service';

describe('ServiceSettingController', () => {
  let controller: ServiceSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceSettingController],
      providers: [ServiceSettingService],
    }).compile();

    controller = module.get<ServiceSettingController>(ServiceSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
