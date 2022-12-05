import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaTablaComversionService } from './prueba-tabla-comversion.service';
import { CreatePruebaTablaComversionDto } from './dto/create-prueba-tabla-comversion.dto';
import { UpdatePruebaTablaComversionDto } from './dto/update-prueba-tabla-comversion.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-tabla-comversion')
export class PruebaTablaComversionController {
  constructor(private readonly pruebaTablaComversionService: PruebaTablaComversionService) {}

  @Post('create')
  create(@Body() createPruebaTablaComversionDto: CreatePruebaTablaComversionDto) {
    return this.pruebaTablaComversionService.create(createPruebaTablaComversionDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaTablaComversionService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaTablaComversionService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaTablaComversionDto: UpdatePruebaTablaComversionDto) {
    return this.pruebaTablaComversionService.update(id, updatePruebaTablaComversionDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaTablaComversionService.remove(id);
  }
}
