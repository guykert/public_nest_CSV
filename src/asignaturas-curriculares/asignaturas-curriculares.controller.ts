import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { AsignaturasCurricularesService } from './asignaturas-curriculares.service';
import { CreateAsignaturasCurriculareDto } from './dto/create-asignaturas-curriculare.dto';
import { UpdateAsignaturasCurriculareDto } from './dto/update-asignaturas-curriculare.dto';

@Controller('asignaturas-curriculares')
export class AsignaturasCurricularesController {
  constructor(private readonly asignaturasCurricularesService: AsignaturasCurricularesService) {}

  @Post('create')
  create(@Body() createAsignaturasCurriculareDto: CreateAsignaturasCurriculareDto) {
    return this.asignaturasCurricularesService.create(createAsignaturasCurriculareDto);
  }

  @Get('find-all/:query')
    findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
      return this.asignaturasCurricularesService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.asignaturasCurricularesService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAsignaturasCurriculareDto: UpdateAsignaturasCurriculareDto) {
    return this.asignaturasCurricularesService.update(id, updateAsignaturasCurriculareDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.asignaturasCurricularesService.remove(id);
  }


}
