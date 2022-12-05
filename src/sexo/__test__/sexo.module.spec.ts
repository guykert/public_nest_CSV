import { Test, TestingModule } from '@nestjs/testing';
import { SexoModule } from '../sexo.module';



describe('SexoModule', () => {
  let sexoModule: SexoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SexoModule],
    }).compile();

    sexoModule = app.get<SexoModule>(SexoModule);
  });

  it('should be defined', () => {
    expect(sexoModule).toBeInstanceOf(SexoModule);
  });
});