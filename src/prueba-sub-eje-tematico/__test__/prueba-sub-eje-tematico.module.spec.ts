import { Test, TestingModule } from '@nestjs/testing';
import { PruebaSubEjeTematicoModule } from '../prueba-sub-eje-tematico.module';


describe('LetraModule', () => {
  let pruebaSubEjeTematicoModule: PruebaSubEjeTematicoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaSubEjeTematicoModule],
    }).compile();

    pruebaSubEjeTematicoModule = app.get<PruebaSubEjeTematicoModule>(PruebaSubEjeTematicoModule);
  });

  it('should be defined', () => {
    expect(pruebaSubEjeTematicoModule).toBeInstanceOf(PruebaSubEjeTematicoModule);
  });
});