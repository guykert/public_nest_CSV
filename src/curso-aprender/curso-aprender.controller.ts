import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CursoAprenderService } from './curso-aprender.service';
import { CreateCursoAprenderDto } from './dto/create-curso-aprender.dto';
import { UpdateCursoAprenderDto } from './dto/update-curso-aprender.dto';

@Controller('curso-aprender')
export class CursoAprenderController {
  constructor(private readonly cursoAprenderService: CursoAprenderService) {}

  @Post('create')
  create(@Body() createCursoAprenderDto: CreateCursoAprenderDto) {
    return this.cursoAprenderService.create(createCursoAprenderDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.cursoAprenderService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.cursoAprenderService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCursoAprenderDto: UpdateCursoAprenderDto) {
    return this.cursoAprenderService.update(id, updateCursoAprenderDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.cursoAprenderService.remove(id);
  }
}
