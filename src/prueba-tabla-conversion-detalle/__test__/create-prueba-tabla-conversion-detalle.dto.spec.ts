import { CreatePruebaTablaConversionDetalleDto } from '../dto/create-prueba-tabla-conversion-detalle.dto';
import {
DATAMOCK
} from './prueba-tabla-conversion-detalle.mock';
describe('CreatePruebaTablaConversionDetalleDto', () => {

  const updateDto: CreatePruebaTablaConversionDetalleDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaTablaConversionDetalleDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});