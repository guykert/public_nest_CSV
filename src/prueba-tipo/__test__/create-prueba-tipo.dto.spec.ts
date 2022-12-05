import { CreatePruebaTipoDto } from '../dto/create-prueba-tipo.dto';
import {
DATAMOCK
} from './prueba-tipo.mock';
describe('CreatePruebaTipoDto', () => {

  const updateDto: CreatePruebaTipoDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaTipoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});