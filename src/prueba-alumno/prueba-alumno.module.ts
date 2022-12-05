import { Module } from '@nestjs/common';
import { PruebaAlumnoService } from './prueba-alumno.service';
import { PruebaAlumnoController } from './prueba-alumno.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaAlumno, PruebaAlumnoSchema } from './entities/prueba-alumno.entity';

@Module({
  controllers: [PruebaAlumnoController],
  providers: [PruebaAlumnoService],
  exports:[PruebaAlumnoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaAlumno.name,
        schema:PruebaAlumnoSchema,
      }
    ]),
  ]
})
export class PruebaAlumnoModule {}
