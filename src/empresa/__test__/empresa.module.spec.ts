import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaModule } from '../empresa.module';







describe('CursoAprenderDetalleModule', () => {
  let empresaModule: EmpresaModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [EmpresaModule],
    }).compile();

    empresaModule = app.get<EmpresaModule>(EmpresaModule);
  });

  it('should be defined', () => {
    expect(empresaModule).toBeInstanceOf(EmpresaModule);
  });
});