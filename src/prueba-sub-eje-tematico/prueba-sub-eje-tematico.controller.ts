import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaSubEjeTematicoService } from './prueba-sub-eje-tematico.service';
import { CreatePruebaSubEjeTematicoDto } from './dto/create-prueba-sub-eje-tematico.dto';
import { UpdatePruebaSubEjeTematicoDto } from './dto/update-prueba-sub-eje-tematico.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-sub-eje-tematico')
export class PruebaSubEjeTematicoController {
  constructor(private readonly pruebaSubEjeTematicoService: PruebaSubEjeTematicoService) {}

  @Post()
  create(@Body() createPruebaSubEjeTematicoDto: CreatePruebaSubEjeTematicoDto) {
    return this.pruebaSubEjeTematicoService.create(createPruebaSubEjeTematicoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaSubEjeTematicoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaSubEjeTematicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePruebaSubEjeTematicoDto: UpdatePruebaSubEjeTematicoDto) {
    return this.pruebaSubEjeTematicoService.update(id, updatePruebaSubEjeTematicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pruebaSubEjeTematicoService.remove(id);
  }
}
