import { PartialType } from '@nestjs/mapped-types';
import { CreateInglesDetalleDto } from './create-ingles-detalle.dto';

export class UpdateInglesDetalleDto extends PartialType(CreateInglesDetalleDto) {}
