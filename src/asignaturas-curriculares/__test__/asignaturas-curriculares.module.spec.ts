import { Test, TestingModule } from '@nestjs/testing';
import { AsignaturasCurricularesModule } from '../asignaturas-curriculares.module';


describe('AsignaturasCurricularesModule', () => {
  let asignaturasCurricularesModule: AsignaturasCurricularesModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AsignaturasCurricularesModule],
    }).compile();

    asignaturasCurricularesModule = app.get<AsignaturasCurricularesModule>(AsignaturasCurricularesModule);
  });

  it('should be defined', () => {
    expect(asignaturasCurricularesModule).toBeInstanceOf(AsignaturasCurricularesModule);
  });
});