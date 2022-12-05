import { CreateAsignaturasCurriculareDto } from '../dto/create-asignaturas-curriculare.dto';
import {
  DATAMOCK
} from './asignaturas-curriculares.mock';


  describe('CreateAsignaturasCurriculareDto', () => {

    const updateDto: CreateAsignaturasCurriculareDto = DATAMOCK.One;
    it('should create a CreateAsignaturasCurriculareDto object', () => {

      expect(updateDto).toEqual(
        DATAMOCK.One,
      );
    });
  });