import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSettingService } from './service-setting.service';

describe('ServiceSettingService', () => {
  let service: ServiceSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceSettingService],
    }).compile();

    service = module.get<ServiceSettingService>(ServiceSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
