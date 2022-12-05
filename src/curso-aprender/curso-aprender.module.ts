import { Module } from '@nestjs/common';
import { CursoAprenderService } from './curso-aprender.service';
import { CursoAprenderController } from './curso-aprender.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CursoAprender } from './entities/curso-aprender.entity';
import { CursoAprenderDetalleSchema } from '../curso-aprender-detalle/entities/curso-aprender-detalle.entity';

@Module({
  controllers: [CursoAprenderController],
  providers: [CursoAprenderService],
  exports:[CursoAprenderService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:CursoAprender.name,
        schema:CursoAprenderDetalleSchema,
      }
    ]),
  ]
})
export class CursoAprenderModule {}
