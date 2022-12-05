import { Test, TestingModule } from '@nestjs/testing';
import { DiaModule } from '../dia.module';






describe('CursoAprenderDetalleModule', () => {
  let diaModule: DiaModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [DiaModule],
    }).compile();

    diaModule = app.get<DiaModule>(DiaModule);
  });

  it('should be defined', () => {
    expect(diaModule).toBeInstanceOf(DiaModule);
  });
});