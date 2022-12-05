import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RamoService } from './ramo.service';
import { CreateRamoDto } from './dto/create-ramo.dto';
import { UpdateRamoDto } from './dto/update-ramo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('ramo')
export class RamoController {
  constructor(private readonly ramoService: RamoService) {}

  @Post('create')
  create(@Body() createRamoDto: CreateRamoDto) {
    return this.ramoService.create(createRamoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.ramoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.ramoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateRamoDto: UpdateRamoDto) {
    return this.ramoService.update(id, updateRamoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.ramoService.remove(id);
  }
}
