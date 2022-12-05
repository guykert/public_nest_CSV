import { CreateMenuDto } from '../dto/create-menu.dto';
import {
DATAMOCK
} from './menu.mock';
describe('CreateMenuDto', () => {

  const updateDto: CreateMenuDto = DATAMOCK.One;   
  
  it('should create a CreateMenuDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});