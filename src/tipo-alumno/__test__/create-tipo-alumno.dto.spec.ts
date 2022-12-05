import { CreateTipoAlumnoDto } from '../dto/create-tipo-alumno.dto';
import {
DATAMOCK
} from './tipo-alumno.mock';
describe('CreateTipoAlumnoDto', () => {

  const updateDto: CreateTipoAlumnoDto= DATAMOCK.One;   
  
  it('should create a CreateTipoAlumnoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});