import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoAprenderDetalleDto } from './create-curso-aprender-detalle.dto';

export class UpdateCursoAprenderDetalleDto extends PartialType(CreateCursoAprenderDetalleDto) {}
