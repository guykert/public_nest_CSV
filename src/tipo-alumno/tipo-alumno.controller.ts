import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TipoAlumnoService } from './tipo-alumno.service';
import { CreateTipoAlumnoDto } from './dto/create-tipo-alumno.dto';
import { UpdateTipoAlumnoDto } from './dto/update-tipo-alumno.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('tipo-alumno')
export class TipoAlumnoController {
  constructor(private readonly tipoAlumnoService: TipoAlumnoService) {}

  @Post('create')
  create(@Body() createTipoAlumnoDto: CreateTipoAlumnoDto) {
    return this.tipoAlumnoService.create(createTipoAlumnoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.tipoAlumnoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.tipoAlumnoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTipoAlumnoDto: UpdateTipoAlumnoDto) {
    return this.tipoAlumnoService.update(id, updateTipoAlumnoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.tipoAlumnoService.remove(id);
  }
}
