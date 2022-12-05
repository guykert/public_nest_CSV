import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaAlumnoDto } from './create-prueba-alumno.dto';

export class UpdatePruebaAlumnoDto extends PartialType(CreatePruebaAlumnoDto) {}
