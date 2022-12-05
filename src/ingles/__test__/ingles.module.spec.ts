import { Test, TestingModule } from '@nestjs/testing';
import { InglesModule } from '../ingles.module';



describe('InglesModule', () => {
  let inglesModule: InglesModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [InglesModule],
    }).compile();

    inglesModule = app.get<InglesModule>(InglesModule);
  });

  it('should be defined', () => {
    expect(inglesModule).toBeInstanceOf(InglesModule);
  });
});