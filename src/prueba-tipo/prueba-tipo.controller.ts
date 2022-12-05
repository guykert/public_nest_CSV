import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaTipoService } from './prueba-tipo.service';
import { CreatePruebaTipoDto } from './dto/create-prueba-tipo.dto';
import { UpdatePruebaTipoDto } from './dto/update-prueba-tipo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-tipo')
export class PruebaTipoController {
  constructor(private readonly pruebaTipoService: PruebaTipoService) {}

  @Post('create')
  create(@Body() createPruebaTipoDto: CreatePruebaTipoDto) {
    return this.pruebaTipoService.create(createPruebaTipoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaTipoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaTipoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaTipoDto: UpdatePruebaTipoDto) {
    return this.pruebaTipoService.update(id, updatePruebaTipoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaTipoService.remove(id);
  }
}
