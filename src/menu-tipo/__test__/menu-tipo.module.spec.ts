import { Test, TestingModule } from '@nestjs/testing';
import { MenuTipoModule } from '../menu-tipo.module';


describe('LetraModule', () => {
  let menuTipoModule: MenuTipoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [MenuTipoModule],
    }).compile();

    menuTipoModule = app.get<MenuTipoModule>(MenuTipoModule);
  });

  it('should be defined', () => {
    expect(menuTipoModule).toBeInstanceOf(MenuTipoModule);
  });
});