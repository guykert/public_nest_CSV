import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuTipoDto } from './create-menu-tipo.dto';

export class UpdateMenuTipoDto extends PartialType(CreateMenuTipoDto) {}
