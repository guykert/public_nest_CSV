import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaTablaConversionDetalleDto } from './create-prueba-tabla-conversion-detalle.dto';

export class UpdatePruebaTablaConversionDetalleDto extends PartialType(CreatePruebaTablaConversionDetalleDto) {}
