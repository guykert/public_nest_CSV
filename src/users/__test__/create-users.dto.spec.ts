import { CreateUserDto } from '../dto/create-user.dto';
import {
DATAMOCK
} from './users.mock';
describe('CreateUserDto', () => {

  const updateDto: CreateUserDto= DATAMOCK.One;   
  
  it('should create a CreateUserDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});