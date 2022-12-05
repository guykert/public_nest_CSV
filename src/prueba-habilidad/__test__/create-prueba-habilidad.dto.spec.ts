import { CreatePruebaHabilidadDto } from '../dto/create-prueba-habilidad.dto';
import {
DATAMOCK
} from './prueba-habilidad.mock';
describe('CreatePruebaHabilidadDto', () => {

  const updateDto: CreatePruebaHabilidadDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaHabilidadDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});