import { Test, TestingModule } from '@nestjs/testing';
import { InglesDetalleModule } from '../ingles-detalle.module';


describe('InglesDetalleModule', () => {
  let inglesDetalleModule: InglesDetalleModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [InglesDetalleModule],
    }).compile();

    inglesDetalleModule = app.get<InglesDetalleModule>(InglesDetalleModule);
  });

  it('should be defined', () => {
    expect(inglesDetalleModule).toBeInstanceOf(InglesDetalleModule);
  });
});