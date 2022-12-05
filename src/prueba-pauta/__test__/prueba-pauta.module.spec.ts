import { Test, TestingModule } from '@nestjs/testing';
import { PruebaPautaModule } from '../prueba-pauta.module';


describe('LetraModule', () => {
  let pruebaPautaModule: PruebaPautaModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaPautaModule],
    }).compile();

    pruebaPautaModule = app.get<PruebaPautaModule>(PruebaPautaModule);
  });

  it('should be defined', () => {
    expect(pruebaPautaModule).toBeInstanceOf(PruebaPautaModule);
  });
});