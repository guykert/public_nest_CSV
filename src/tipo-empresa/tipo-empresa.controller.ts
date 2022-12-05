import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TipoEmpresaService } from './tipo-empresa.service';
import { CreateTipoEmpresaDto } from './dto/create-tipo-empresa.dto';
import { UpdateTipoEmpresaDto } from './dto/update-tipo-empresa.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('tipo-empresa')
export class TipoEmpresaController {
  constructor(private readonly tipoEmpresaService: TipoEmpresaService) {}

  @Post('create')
  create(@Body() createTipoEmpresaDto: CreateTipoEmpresaDto) {
    return this.tipoEmpresaService.create(createTipoEmpresaDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.tipoEmpresaService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.tipoEmpresaService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTipoEmpresaDto: UpdateTipoEmpresaDto) {
    return this.tipoEmpresaService.update(id, updateTipoEmpresaDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.tipoEmpresaService.remove(id);
  }
}
