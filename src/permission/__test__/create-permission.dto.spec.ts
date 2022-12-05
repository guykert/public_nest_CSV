import { CreatePermissionDto } from '../dto/create-permission.dto';
import {
DATAMOCK
} from './permission.mock';
describe('CreatePermissionDto', () => {

  const updateDto: CreatePermissionDto= DATAMOCK.One;   
  
  it('should create a CreatePermissionDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});