
import { CreateDiaDto } from '../dto/create-dia.dto';
import {
  DATAMOCK
} from './dia.mock';
describe('CreateDiaDto', () => {

    const updateDto: CreateDiaDto = DATAMOCK.One;   
    
    it('should create a CreateDiaDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});