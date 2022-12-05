import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaPautaDto } from './create-prueba-pauta.dto';

export class UpdatePruebaPautaDto extends PartialType(CreatePruebaPautaDto) {}
