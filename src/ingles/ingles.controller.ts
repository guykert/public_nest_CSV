import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { InglesService } from './ingles.service';
import { CreateIngleDto } from './dto/create-ingle.dto';
import { UpdateIngleDto } from './dto/update-ingle.dto';

@Controller('ingles')
export class InglesController {
  constructor(private readonly inglesService: InglesService) {}

  @Post('create')
  create(@Body() createIngleDto: CreateIngleDto) {
    return this.inglesService.create(createIngleDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.inglesService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.inglesService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateIngleDto: UpdateIngleDto) {
    return this.inglesService.update(id, updateIngleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.inglesService.remove(id);
  }
}
