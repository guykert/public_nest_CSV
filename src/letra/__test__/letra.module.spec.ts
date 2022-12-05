import { Test, TestingModule } from '@nestjs/testing';
import { LetraModule } from '../letra.module';


describe('LetraModule', () => {
  let letraModule: LetraModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [LetraModule],
    }).compile();

    letraModule = app.get<LetraModule>(LetraModule);
  });

  it('should be defined', () => {
    expect(letraModule).toBeInstanceOf(LetraModule);
  });
});