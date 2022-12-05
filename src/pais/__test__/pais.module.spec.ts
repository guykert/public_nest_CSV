import { Test, TestingModule } from '@nestjs/testing';
import { PaisModule } from '../pais.module';


describe('LetraModule', () => {
  let paisModule: PaisModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PaisModule],
    }).compile();

    paisModule = app.get<PaisModule>(PaisModule);
  });

  it('should be defined', () => {
    expect(paisModule).toBeInstanceOf(PaisModule);
  });
});