import { CreatePaiDto } from '../dto/create-pai.dto';
import {
DATAMOCK
} from './pais.mock';
describe('CreatePaiDto', () => {

  const updateDto: CreatePaiDto= DATAMOCK.One;   
  
  it('should create a CreatePaiDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});