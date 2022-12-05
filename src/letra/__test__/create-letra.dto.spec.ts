import { CreateLetraDto } from '../dto/create-letra.dto';
import {
DATAMOCK
} from './letra.mock';
describe('CreateLetraDto', () => {

  const updateDto: CreateLetraDto = DATAMOCK.One;   
  
  it('should create a CreateLetraDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});