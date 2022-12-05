import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaisService } from './pais.service';
import { CreatePaiDto } from './dto/create-pai.dto';
import { UpdatePaiDto } from './dto/update-pai.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Post('create')
  create(@Body() createPaiDto: CreatePaiDto) {
    return this.paisService.create(createPaiDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.paisService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.paisService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePaiDto: UpdatePaiDto) {
    return this.paisService.update(id, updatePaiDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.paisService.remove(id);
  }
}
