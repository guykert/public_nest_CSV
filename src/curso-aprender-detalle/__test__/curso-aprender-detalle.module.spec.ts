import { Test, TestingModule } from '@nestjs/testing';
import { CursoAprenderDetalleModule } from '../curso-aprender-detalle.module';





describe('CursoAprenderDetalleModule', () => {
  let cursoAprenderDetalleModule: CursoAprenderDetalleModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CursoAprenderDetalleModule],
    }).compile();

    cursoAprenderDetalleModule = app.get<CursoAprenderDetalleModule>(CursoAprenderDetalleModule);
  });

  it('should be defined', () => {
    expect(cursoAprenderDetalleModule).toBeInstanceOf(CursoAprenderDetalleModule);
  });
});