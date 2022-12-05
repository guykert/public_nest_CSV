import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { LetraService } from './letra.service';
import { CreateLetraDto } from './dto/create-letra.dto';
import { UpdateLetraDto } from './dto/update-letra.dto';

@Controller('letra')
export class LetraController {
  constructor(private readonly letraService: LetraService) {}

  @Post('create')
  create(@Body() createLetraDto: CreateLetraDto) {
    return this.letraService.create(createLetraDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.letraService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.letraService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateLetraDto: UpdateLetraDto) {
    return this.letraService.update(id, updateLetraDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.letraService.remove(id);
  }



}
