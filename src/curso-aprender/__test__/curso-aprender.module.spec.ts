import { Test, TestingModule } from '@nestjs/testing';
import { CursoAprenderModule } from '../curso-aprender.module';




describe('InglesDetalleModule', () => {
  let cursoAprenderModule: CursoAprenderModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CursoAprenderModule],
    }).compile();

    cursoAprenderModule = app.get<CursoAprenderModule>(CursoAprenderModule);
  });

  it('should be defined', () => {
    expect(cursoAprenderModule).toBeInstanceOf(CursoAprenderModule);
  });
});