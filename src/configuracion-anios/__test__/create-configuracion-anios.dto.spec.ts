import { CreateConfiguracionAnioDto } from '../dto/create-configuracion-anio.dto';
import {
  DATAMOCK
} from './configuracion-anios.mock';
describe('CreateConfiguracionAnioDto', () => {

    const updateDto: CreateConfiguracionAnioDto = DATAMOCK.One;   
    
    it('should create a CreateConfiguracionAnioDto object', () => {

    expect(updateDto).toEqual(
      DATAMOCK.One,
    );
  });
});