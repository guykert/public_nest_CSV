import { CreatePruebaPautaDto } from '../dto/create-prueba-pauta.dto';
import {
DATAMOCK
} from './prueba-pauta.mock';
describe('CreatePruebaPautaDto', () => {

  const updateDto: CreatePruebaPautaDto= DATAMOCK.One;   
  
  it('should create a CreatePruebaPautaDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});