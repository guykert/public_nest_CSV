import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaTipoDto } from './create-prueba-tipo.dto';

export class UpdatePruebaTipoDto extends PartialType(CreatePruebaTipoDto) {}
