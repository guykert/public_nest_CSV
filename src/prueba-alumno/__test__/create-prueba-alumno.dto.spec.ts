import { CreatePruebaAlumnoDto } from '../dto/create-prueba-alumno.dto';
import {
DATAMOCK
} from './prueba-alumno.mock';
describe('CreatePruebaAlumnoDto', () => {

  const updateDto: CreatePruebaAlumnoDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaAlumnoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});