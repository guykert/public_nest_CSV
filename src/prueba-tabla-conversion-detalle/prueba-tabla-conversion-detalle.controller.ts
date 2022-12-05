import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PruebaTablaConversionDetalleService } from './prueba-tabla-conversion-detalle.service';
import { CreatePruebaTablaConversionDetalleDto } from './dto/create-prueba-tabla-conversion-detalle.dto';
import { UpdatePruebaTablaConversionDetalleDto } from './dto/update-prueba-tabla-conversion-detalle.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('prueba-tabla-conversion-detalle')
export class PruebaTablaConversionDetalleController {
  constructor(private readonly pruebaTablaConversionDetalleService: PruebaTablaConversionDetalleService) {}

  @Post('create')
  create(@Body() createPruebaTablaConversionDetalleDto: CreatePruebaTablaConversionDetalleDto) {
    return this.pruebaTablaConversionDetalleService.create(createPruebaTablaConversionDetalleDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.pruebaTablaConversionDetalleService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.pruebaTablaConversionDetalleService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePruebaTablaConversionDetalleDto: UpdatePruebaTablaConversionDetalleDto) {
    return this.pruebaTablaConversionDetalleService.update(id, updatePruebaTablaConversionDetalleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.pruebaTablaConversionDetalleService.remove(id);
  }
}
