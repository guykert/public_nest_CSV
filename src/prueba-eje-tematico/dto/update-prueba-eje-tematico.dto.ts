import { PartialType } from '@nestjs/mapped-types';
import { CreatePruebaEjeTematicoDto } from './create-prueba-eje-tematico.dto';

export class UpdatePruebaEjeTematicoDto extends PartialType(CreatePruebaEjeTematicoDto) {}
