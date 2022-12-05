import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracionAniosModule } from '../configuracion-anios.module';


describe('ConfiguracionAniosModule', () => {
  let configuracionAniosModule: ConfiguracionAniosModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ConfiguracionAniosModule],
    }).compile();

    configuracionAniosModule = app.get<ConfiguracionAniosModule>(ConfiguracionAniosModule);
  });

  it('should be defined', () => {
    expect(configuracionAniosModule).toBeInstanceOf(ConfiguracionAniosModule);
  });
});