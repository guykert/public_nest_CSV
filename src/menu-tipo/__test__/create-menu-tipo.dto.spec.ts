import { CreateMenuTipoDto } from '../dto/create-menu-tipo.dto';
import {
DATAMOCK
} from './menu-tipo.mock';
describe('CreateMenuTipoDto', () => {

  const updateDto: CreateMenuTipoDto= DATAMOCK.One;   
  
  it('should create a CreateMenuTipoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});