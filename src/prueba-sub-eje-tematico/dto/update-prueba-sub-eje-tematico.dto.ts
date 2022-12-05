import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaSubEjeTematicoDto } from './create-prueba-sub-eje-tematico.dto';

export class UpdatePruebaSubEjeTematicoDto extends PartialType(CreatePruebaSubEjeTematicoDto) {}
