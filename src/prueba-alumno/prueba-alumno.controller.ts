import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaAlumnoService } from './prueba-alumno.service';
import { CreatePruebaAlumnoDto } from './dto/create-prueba-alumno.dto';
import { UpdatePruebaAlumnoDto } from './dto/update-prueba-alumno.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-alumno')
export class PruebaAlumnoController {
  constructor(private readonly pruebaAlumnoService: PruebaAlumnoService) {}

  @Post('create')
  create(@Body() createPruebaAlumnoDto: CreatePruebaAlumnoDto) {
    return this.pruebaAlumnoService.create(createPruebaAlumnoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaAlumnoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaAlumnoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaAlumnoDto: UpdatePruebaAlumnoDto) {
    return this.pruebaAlumnoService.update(id, updatePruebaAlumnoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaAlumnoService.remove(id);
  }
}
