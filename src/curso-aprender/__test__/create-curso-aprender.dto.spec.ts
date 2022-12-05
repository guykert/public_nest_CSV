import { CreateCursoAprenderDto } from '../dto/create-curso-aprender.dto';
import {
  DATAMOCK
} from './curso-aprender.mock';
describe('CreateCursoAprenderDto', () => {

    const updateDto: CreateCursoAprenderDto = DATAMOCK.One;   
    
    it('should create a CreateCursoAprenderDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});