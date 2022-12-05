import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaHabilidadService } from './prueba-habilidad.service';
import { CreatePruebaHabilidadDto } from './dto/create-prueba-habilidad.dto';
import { UpdatePruebaHabilidadDto } from './dto/update-prueba-habilidad.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-habilidad')
export class PruebaHabilidadController {
  constructor(private readonly pruebaHabilidadService: PruebaHabilidadService) {}

  @Post('create')
  create(@Body() createPruebaHabilidadDto: CreatePruebaHabilidadDto) {
    return this.pruebaHabilidadService.create(createPruebaHabilidadDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaHabilidadService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaHabilidadService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaHabilidadDto: UpdatePruebaHabilidadDto) {
    return this.pruebaHabilidadService.update(id, updatePruebaHabilidadDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaHabilidadService.remove(id);
  }
}
