import { Test, TestingModule } from '@nestjs/testing';
import { TipoEmpresaModule } from '../tipo-empresa.module';



describe('LetraModule', () => {
  let tipoEmpresaModule: TipoEmpresaModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TipoEmpresaModule],
    }).compile();

    tipoEmpresaModule = app.get<TipoEmpresaModule>(TipoEmpresaModule);
  });

  it('should be defined', () => {
    expect(tipoEmpresaModule).toBeInstanceOf(TipoEmpresaModule);
  });
});