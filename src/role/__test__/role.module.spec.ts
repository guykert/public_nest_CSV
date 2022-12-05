import { Test, TestingModule } from '@nestjs/testing';
import { RoleModule } from '../role.module';



describe('RoleModule', () => {
  let roleModule: RoleModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [RoleModule],
    }).compile();

    roleModule = app.get<RoleModule>(RoleModule);
  });

  it('should be defined', () => {
    expect(roleModule).toBeInstanceOf(RoleModule);
  });
});