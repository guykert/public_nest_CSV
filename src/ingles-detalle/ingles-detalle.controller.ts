import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { InglesDetalleService } from './ingles-detalle.service';
import { CreateInglesDetalleDto } from './dto/create-ingles-detalle.dto';
import { UpdateInglesDetalleDto } from './dto/update-ingles-detalle.dto';

@Controller('ingles-detalle')
export class InglesDetalleController {
  constructor(private readonly inglesDetalleService: InglesDetalleService) {}

  @Post('create')
  create(@Body() createInglesDetalleDto: CreateInglesDetalleDto) {
    return this.inglesDetalleService.create(createInglesDetalleDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.inglesDetalleService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.inglesDetalleService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateInglesDetalleDto: UpdateInglesDetalleDto) {
    return this.inglesDetalleService.update(id, updateInglesDetalleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.inglesDetalleService.remove(id);
  }
}
