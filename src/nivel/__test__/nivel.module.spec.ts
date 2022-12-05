import { Test, TestingModule } from '@nestjs/testing';
import { NivelModule } from '../nivel.module';



describe('LetraModule', () => {
  let nivelModule: NivelModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [NivelModule],
    }).compile();

    nivelModule = app.get<NivelModule>(NivelModule);
  });

  it('should be defined', () => {
    expect(nivelModule).toBeInstanceOf(NivelModule);
  });
});