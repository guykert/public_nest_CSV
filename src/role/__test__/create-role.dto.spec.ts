import { CreateRoleDto } from '../dto/create-role.dto';
import {
DATAMOCK
} from './role.mock';
describe('CreateRoleDto', () => {

  const updateDto: CreateRoleDto= DATAMOCK.One;   
  
  it('should create a CreateRoleDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});