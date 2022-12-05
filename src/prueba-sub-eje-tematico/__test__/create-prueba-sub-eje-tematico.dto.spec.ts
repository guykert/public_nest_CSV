import { CreatePruebaSubEjeTematicoDto } from '../dto/create-prueba-sub-eje-tematico.dto';
import {
DATAMOCK
} from './prueba-sub-eje-tematico.mock';
describe('CreatePruebaSubEjeTematicoDto', () => {

  const updateDto: CreatePruebaSubEjeTematicoDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaSubEjeTematicoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});