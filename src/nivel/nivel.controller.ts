import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { NivelService } from './nivel.service';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';

@Controller('nivel')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Post('create')
  create(@Body() createNivelDto: CreateNivelDto) {
    return this.nivelService.create(createNivelDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.nivelService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.nivelService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateNivelDto: UpdateNivelDto) {
    return this.nivelService.update(id, updateNivelDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.nivelService.remove(id);
  }


  
}
