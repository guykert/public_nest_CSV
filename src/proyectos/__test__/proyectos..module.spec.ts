import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosModule } from '../proyectos.module';


describe('LetraModule', () => {
  let proyectosModule: ProyectosModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ProyectosModule],
    }).compile();

    proyectosModule = app.get<ProyectosModule>(ProyectosModule);
  });

  it('should be defined', () => {
    expect(proyectosModule).toBeInstanceOf(ProyectosModule);
  });
});