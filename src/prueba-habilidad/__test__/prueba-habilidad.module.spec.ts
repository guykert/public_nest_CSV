import { Test, TestingModule } from '@nestjs/testing';
import { PruebaHabilidadModule } from '../prueba-habilidad.module';



describe('LetraModule', () => {
  let pruebaHabilidadModule: PruebaHabilidadModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaHabilidadModule],
    }).compile();

    pruebaHabilidadModule = app.get<PruebaHabilidadModule>(PruebaHabilidadModule);
  });

  it('should be defined', () => {
    expect(pruebaHabilidadModule).toBeInstanceOf(PruebaHabilidadModule);
  });
});