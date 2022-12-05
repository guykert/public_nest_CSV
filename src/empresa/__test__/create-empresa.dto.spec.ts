import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import {
  DATAMOCK
} from './empresa.mock';
describe('CreateEmpresaDto', () => {

    const updateDto: CreateEmpresaDto = DATAMOCK.One;   
    
    it('should create a CreateEmpresaDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});