import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post('create')
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.empresaService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(id, updateEmpresaDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }

}
