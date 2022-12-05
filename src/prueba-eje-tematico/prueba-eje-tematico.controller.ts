import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaEjeTematicoService } from './prueba-eje-tematico.service';
import { CreatePruebaEjeTematicoDto } from './dto/create-prueba-eje-tematico.dto';
import { UpdatePruebaEjeTematicoDto } from './dto/update-prueba-eje-tematico.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-eje-tematico')
export class PruebaEjeTematicoController {
  constructor(private readonly pruebaEjeTematicoService: PruebaEjeTematicoService) {}

  @Post('create')
  create(@Body() createPruebaEjeTematicoDto: CreatePruebaEjeTematicoDto) {
    return this.pruebaEjeTematicoService.create(createPruebaEjeTematicoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaEjeTematicoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaEjeTematicoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaEjeTematicoDto: UpdatePruebaEjeTematicoDto) {
    return this.pruebaEjeTematicoService.update(id, updatePruebaEjeTematicoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaEjeTematicoService.remove(id);
  }
}
