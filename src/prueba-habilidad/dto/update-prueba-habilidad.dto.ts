import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaHabilidadDto } from './create-prueba-habilidad.dto';

export class UpdatePruebaHabilidadDto extends PartialType(CreatePruebaHabilidadDto) {}
