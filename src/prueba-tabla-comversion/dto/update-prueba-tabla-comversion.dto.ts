import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaTablaComversionDto } from './create-prueba-tabla-comversion.dto';

export class UpdatePruebaTablaComversionDto extends PartialType(CreatePruebaTablaComversionDto) {}
