import { Module } from '@nestjs/common';
import { CursoAprenderDetalleService } from './curso-aprender-detalle.service';
import { CursoAprenderDetalleController } from './curso-aprender-detalle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CursoAprenderDetalle, CursoAprenderDetalleSchema } from './entities/curso-aprender-detalle.entity';

@Module({
  controllers: [CursoAprenderDetalleController],
  providers: [CursoAprenderDetalleService],
  exports:[CursoAprenderDetalleService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:CursoAprenderDetalle.name,
        schema:CursoAprenderDetalleSchema,
      }
    ]),
  ]
})
export class CursoAprenderDetalleModule {}
