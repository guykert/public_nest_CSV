import { CreateRamoDto } from '../dto/create-ramo.dto';
import {
DATAMOCK
} from './ramo.mock';
describe('CreateRamoDto', () => {

  const updateDto: CreateRamoDto= DATAMOCK.One;   
  
  it('should create a CreateRamoDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});