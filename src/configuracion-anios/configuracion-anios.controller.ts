import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ConfiguracionAniosService } from './configuracion-anios.service';
import { CreateConfiguracionAnioDto } from './dto/create-configuracion-anio.dto';
import { UpdateConfiguracionAnioDto } from './dto/update-configuracion-anio.dto';

@Controller('configuracion-anios')
export class ConfiguracionAniosController {
  constructor(private readonly configuracionAniosService: ConfiguracionAniosService) {}

  @Post('create')
  create(@Body() createConfiguracionAnioDto: CreateConfiguracionAnioDto) {
    return this.configuracionAniosService.create(createConfiguracionAnioDto);
  }

  @Get('find-all/:query')
  findAll( @Query() 
    paginationDto: PaginationDto,
    @Param('query') query: string
  ) {

    return this.configuracionAniosService.findAll(paginationDto);
  }

  @Get('find-one/:id')
  findOne(@Param('id') id: string) {
    return this.configuracionAniosService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateConfiguracionAnioDto: UpdateConfiguracionAnioDto) {
    return this.configuracionAniosService.update(id, updateConfiguracionAnioDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.configuracionAniosService.remove(id);
  }


}
