import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users.module';


describe('LetraModule', () => {
  let usersModule: UsersModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UsersModule],
    }).compile();

    usersModule = app.get<UsersModule>(UsersModule);
  });

  it('should be defined', () => {
    expect(usersModule).toBeInstanceOf(UsersModule);
  });
});