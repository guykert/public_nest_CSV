import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { DiaService } from './dia.service';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';

@Controller('dia')
export class DiaController {
  constructor(private readonly diaService: DiaService) {}

  @Post('create')
  create(@Body() createDiaDto: CreateDiaDto) {
    return this.diaService.create(createDiaDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.diaService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.diaService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateDiaDto: UpdateDiaDto) {
    return this.diaService.update(id, updateDiaDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.diaService.remove(id);
  }


}
