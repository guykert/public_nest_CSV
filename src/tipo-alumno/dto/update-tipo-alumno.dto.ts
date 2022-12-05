import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoAlumnoDto } from './create-tipo-alumno.dto';

export class UpdateTipoAlumnoDto extends PartialType(CreateTipoAlumnoDto) {}
