import { Test, TestingModule } from '@nestjs/testing';
import { KonversiSuhuController } from './konversi-suhu.controller';
import { KonversiSuhuService } from './konversi-suhu.service';

describe('KonversiSuhuController', () => {
  let controller: KonversiSuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonversiSuhuController],
      providers: [KonversiSuhuService],
    }).compile();

    controller = module.get<KonversiSuhuController>(KonversiSuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
