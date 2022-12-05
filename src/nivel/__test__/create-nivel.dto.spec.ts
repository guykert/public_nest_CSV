import { CreateNivelDto } from '../dto/create-nivel.dto';
import {
DATAMOCK
} from './nivel.mock';
describe('CreateNivelDto', () => {

  const updateDto: CreateNivelDto= DATAMOCK.One;   
  
  it('should create a CreateNivelDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});