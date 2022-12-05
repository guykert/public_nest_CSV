import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('sexo')
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Post('create')
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexoService.create(createSexoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.sexoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.sexoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexoService.update(id, updateSexoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.sexoService.remove(id);
  }
}
