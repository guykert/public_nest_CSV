import { CreatePruebaTablaComversionDto } from '../dto/create-prueba-tabla-comversion.dto';
import {
DATAMOCK
} from './prueba-tabla-comversion.mock';
describe('CreatePruebaTablaComversionDto', () => {

  const updateDto: CreatePruebaTablaComversionDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaTablaComversionDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});