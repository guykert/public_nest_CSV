import { PartialType } from '@nestjs/mapped-types';
import { CreateCursoAprenderDto } from './create-curso-aprender.dto';

export class UpdateCursoAprenderDto extends PartialType(CreateCursoAprenderDto) {}
