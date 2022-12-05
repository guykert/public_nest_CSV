import { Test, TestingModule } from '@nestjs/testing';
import { PruebaEjeTematicoModule } from '../prueba-eje-tematico.module';


describe('PruebaEjeTematicoModule', () => {
  let pruebaEjeTematicoModule: PruebaEjeTematicoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaEjeTematicoModule],
    }).compile();

    pruebaEjeTematicoModule = app.get<PruebaEjeTematicoModule>(PruebaEjeTematicoModule);
  });

  it('should be defined', () => {
    expect(pruebaEjeTematicoModule).toBeInstanceOf(PruebaEjeTematicoModule);
  });
});