import { CreateCursoAprenderDetalleDto } from '../dto/create-curso-aprender-detalle.dto';

import {
  DATAMOCK
} from './curso-aprender-detalle.mock';
describe('CreateCursoAprenderDetalleDto', () => {

    const updateDto: CreateCursoAprenderDetalleDto = DATAMOCK.One;   
    
    it('should create a CreateCursoAprenderDetalleDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});