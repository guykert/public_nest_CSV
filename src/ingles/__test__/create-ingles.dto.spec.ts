import { CreateIngleDto } from '../dto/create-ingle.dto';
import {
DATAMOCK
} from './ingles.mock';
describe('CreateIngleDto', () => {

  const updateDto: CreateIngleDto = DATAMOCK.One;   
  
  it('should create a CreateIngleDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});