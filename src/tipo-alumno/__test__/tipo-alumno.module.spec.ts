import { Test, TestingModule } from '@nestjs/testing';
import { TipoAlumnoModule } from '../tipo-alumno.module';


describe('TipoAlumnoModule', () => {
  let tipoAlumnoModule: TipoAlumnoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TipoAlumnoModule],
    }).compile();

    tipoAlumnoModule = app.get<TipoAlumnoModule>(TipoAlumnoModule);
  });

  it('should be defined', () => {
    expect(tipoAlumnoModule).toBeInstanceOf(TipoAlumnoModule);
  });
});