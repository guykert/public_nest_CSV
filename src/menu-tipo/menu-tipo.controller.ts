import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { MenuTipoService } from './menu-tipo.service';
import { CreateMenuTipoDto } from './dto/create-menu-tipo.dto';
import { UpdateMenuTipoDto } from './dto/update-menu-tipo.dto';

@Controller('menu-tipo')
export class MenuTipoController {
  constructor(private readonly menuTipoService: MenuTipoService) {}

  @Post('create')
  create(@Body() createMenuTipoDto: CreateMenuTipoDto) {
    return this.menuTipoService.create(createMenuTipoDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {
    return this.menuTipoService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.menuTipoService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateMenuTipoDto: UpdateMenuTipoDto) {
    return this.menuTipoService.update(id, updateMenuTipoDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.menuTipoService.remove(id);
  }
}
