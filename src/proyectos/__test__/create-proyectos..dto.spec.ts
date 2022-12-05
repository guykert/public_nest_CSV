import { CreateProyectoDto } from '../dto/create-proyecto.dto';
import {
DATAMOCK
} from './proyectos..mock';
describe('CreateProyectoDto', () => {

  const updateDto: CreateProyectoDto= DATAMOCK.One;   
  
  it('should create a CreateProyectoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});