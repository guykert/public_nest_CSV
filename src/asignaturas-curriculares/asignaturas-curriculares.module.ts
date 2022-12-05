import { Module } from '@nestjs/common';
import { AsignaturasCurricularesService } from './asignaturas-curriculares.service';
import { AsignaturasCurricularesController } from './asignaturas-curriculares.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AsignaturasCurriculare, AsignaturasCurriculareSchema } from './entities/asignaturas-curriculare.entity';

@Module({
  controllers: [AsignaturasCurricularesController],
  providers: [AsignaturasCurricularesService],
  exports:[AsignaturasCurricularesService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:AsignaturasCurriculare.name,
        schema:AsignaturasCurriculareSchema,
      }
    ]),
  ]

})
export class AsignaturasCurricularesModule {}
