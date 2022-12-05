import { CreateTipoEmpresaDto } from '../dto/create-tipo-empresa.dto';
import {
DATAMOCK
} from './tipo-empresa.mock';
describe('CreateTipoEmpresaDto', () => {

  const updateDto: CreateTipoEmpresaDto= DATAMOCK.One;   
  
  it('should create a CreateTipoEmpresaDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});