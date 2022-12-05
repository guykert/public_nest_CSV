import { PartialType } from '@nestjs/mapped-types';
import { CreateIngleDto } from './create-ingle.dto';

export class UpdateIngleDto extends PartialType(CreateIngleDto) {}
