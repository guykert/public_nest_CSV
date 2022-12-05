import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CursoAprenderDetalleService } from './curso-aprender-detalle.service';
import { CreateCursoAprenderDetalleDto } from './dto/create-curso-aprender-detalle.dto';
import { UpdateCursoAprenderDetalleDto } from './dto/update-curso-aprender-detalle.dto';

@Controller('curso-aprender-detalle')
export class CursoAprenderDetalleController {
  constructor(private readonly cursoAprenderDetalleService: CursoAprenderDetalleService) {}

  @Post('create')
  create(@Body() createCursoAprenderDetalleDto: CreateCursoAprenderDetalleDto) {
    return this.cursoAprenderDetalleService.create(createCursoAprenderDetalleDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.cursoAprenderDetalleService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.cursoAprenderDetalleService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCursoAprenderDetalleDto: UpdateCursoAprenderDetalleDto) {
    return this.cursoAprenderDetalleService.update(id, updateCursoAprenderDetalleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.cursoAprenderDetalleService.remove(id);
  }
}
