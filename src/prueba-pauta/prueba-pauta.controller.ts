import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaPautaService } from './prueba-pauta.service';
import { CreatePruebaPautaDto } from './dto/create-prueba-pauta.dto';
import { UpdatePruebaPautaDto } from './dto/update-prueba-pauta.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-pauta')
export class PruebaPautaController {
  constructor(private readonly pruebaPautaService: PruebaPautaService) {}

  @Post()
  create(@Body() createPruebaPautaDto: CreatePruebaPautaDto) {
    return this.pruebaPautaService.create(createPruebaPautaDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaPautaService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaPautaService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaPautaDto: UpdatePruebaPautaDto) {
    return this.pruebaPautaService.update(id, updatePruebaPautaDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaPautaService.remove(id);
  }
}
