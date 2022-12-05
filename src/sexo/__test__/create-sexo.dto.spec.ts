import { CreateSexoDto } from '../dto/create-sexo.dto';
import {
DATAMOCK
} from './sexo.mock';
describe('CreateSexoDto', () => {

  const updateDto: CreateSexoDto= DATAMOCK.One;   
  
  it('should create a CreateSexoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});