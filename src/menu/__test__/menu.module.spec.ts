import { Test, TestingModule } from '@nestjs/testing';
import { MenuModule } from '../menu.module';



describe('LetraModule', () => {
  let menuModule: MenuModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [MenuModule],
    }).compile();

    menuModule = app.get<MenuModule>(MenuModule);
  });

  it('should be defined', () => {
    expect(menuModule).toBeInstanceOf(MenuModule);
  });
});