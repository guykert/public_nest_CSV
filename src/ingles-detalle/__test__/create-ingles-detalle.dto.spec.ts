import { CreateInglesDetalleDto } from '../dto/create-ingles-detalle.dto';
import {
DATAMOCK
} from './ingles-detalle.mock';
describe('CreateInglesDetalleDto', () => {

  const updateDto: CreateInglesDetalleDto = DATAMOCK.One;   
  
  it('should create a CreateInglesDetalleDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});