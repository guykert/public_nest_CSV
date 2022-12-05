import { Test, TestingModule } from '@nestjs/testing';
import { PruebaTablaComversionModule } from '../prueba-tabla-comversion.module';


describe('PruebaTablaComversionModule', () => {
  let pruebaTablaComversionModule: PruebaTablaComversionModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaTablaComversionModule],
    }).compile();

    pruebaTablaComversionModule = app.get<PruebaTablaComversionModule>(PruebaTablaComversionModule);
  });

  it('should be defined', () => {
    expect(pruebaTablaComversionModule).toBeInstanceOf(PruebaTablaComversionModule);
  });
});