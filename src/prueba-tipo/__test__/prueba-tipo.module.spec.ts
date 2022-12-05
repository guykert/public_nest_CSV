import { Test, TestingModule } from '@nestjs/testing';
import { PruebaTipoModule } from '../prueba-tipo.module';



describe('LetraModule', () => {
  let pruebaTipoModule: PruebaTipoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaTipoModule],
    }).compile();

    pruebaTipoModule = app.get<PruebaTipoModule>(PruebaTipoModule);
  });

  it('should be defined', () => {
    expect(pruebaTipoModule).toBeInstanceOf(PruebaTipoModule);
  });
});