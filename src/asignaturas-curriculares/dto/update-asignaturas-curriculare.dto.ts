import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignaturasCurriculareDto } from './create-asignaturas-curriculare.dto';

export class UpdateAsignaturasCurriculareDto extends PartialType(CreateAsignaturasCurriculareDto) {}
