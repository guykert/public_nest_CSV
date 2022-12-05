import { Module } from '@nestjs/common';
import { TipoAlumnoService } from './tipo-alumno.service';
import { TipoAlumnoController } from './tipo-alumno.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TipoAlumno, TipoAlumnoSchema } from './entities/tipo-alumno.entity';

@Module({
  controllers: [TipoAlumnoController],
  providers: [TipoAlumnoService],
  exports:[TipoAlumnoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:TipoAlumno.name,
        schema:TipoAlumnoSchema,
      }
    ]),
  ]
})
export class TipoAlumnoModule {}
