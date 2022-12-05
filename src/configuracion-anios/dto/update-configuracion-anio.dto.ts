import { PartialType } from '@nestjs/mapped-types';
import { CreateConfiguracionAnioDto } from './create-configuracion-anio.dto';

export class UpdateConfiguracionAnioDto extends PartialType(CreateConfiguracionAnioDto) {}
