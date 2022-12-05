import { Test, TestingModule } from '@nestjs/testing';
import { PermissionModule } from '../permission.module';


describe('LetraModule', () => {
  let permissionModule: PermissionModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PermissionModule],
    }).compile();

    permissionModule = app.get<PermissionModule>(PermissionModule);
  });

  it('should be defined', () => {
    expect(permissionModule).toBeInstanceOf(PermissionModule);
  });
});