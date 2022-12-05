
import { CreatePruebaEjeTematicoDto } from '../dto/create-prueba-eje-tematico.dto';
import {
DATAMOCK
} from './prueba-eje-tematico.mock';
describe('CreatePruebaEjeTematicoDto', () => {

  const updateDto: CreatePruebaEjeTematicoDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaEjeTematicoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});