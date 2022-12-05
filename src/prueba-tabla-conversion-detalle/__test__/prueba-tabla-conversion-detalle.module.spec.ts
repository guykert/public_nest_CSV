import { Test, TestingModule } from '@nestjs/testing';
import { LetraModule } from '../letra.module';


describe('PruebaTablaConversionDetalleModule', () => {
  let pruebaTablaConversionDetalleModule: PruebaTablaConversionDetalleModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PruebaTablaConversionDetalleModule],
    }).compile();

    pruebaTablaConversionDetalleModule = app.get<PruebaTablaConversionDetalleModule>(PruebaTablaConversionDetalleModule);
  });

  it('should be defined', () => {
    expect(pruebaTablaConversionDetalleModule).toBeInstanceOf(PruebaTablaConversionDetalleModule);
  });
});