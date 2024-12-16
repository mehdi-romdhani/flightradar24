import { Test, TestingModule } from '@nestjs/testing';
import { AirlinesLightController } from './airlines-light-service.controller';

describe('AirlinesLightServiceController', () => {
  let controller: AirlinesLightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirlinesLightController],
    }).compile();

    controller = module.get<AirlinesLightController>(AirlinesLightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
