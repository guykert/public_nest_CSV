import { Test, TestingModule } from '@nestjs/testing';
import { PruebaAlumnoModule } from '../prueba-alumno.module';


describe('LetraModule', () => {
  let pruebaAlumnoModule: PruebaAlumnoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaAlumnoModule],
    }).compile();

    pruebaAlumnoModule = app.get<PruebaAlumnoModule>(PruebaAlumnoModule);
  });

  it('should be defined', () => {
    expect(pruebaAlumnoModule).toBeInstanceOf(PruebaAlumnoModule);
  });
});