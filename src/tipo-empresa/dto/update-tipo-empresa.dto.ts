import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEmpresaDto } from './create-tipo-empresa.dto';

export class UpdateTipoEmpresaDto extends PartialType(CreateTipoEmpresaDto) {}
