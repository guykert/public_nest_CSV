import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Proyecto, ProyectoSchema } from './entities/proyecto.entity';

@Module({
  controllers: [ProyectosController],
  providers: [ProyectosService],
  exports:[ProyectosService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Proyecto.name,
        schema:ProyectoSchema,
      }
    ]),
  ]
})
export class ProyectosModule {}
