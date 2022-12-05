import { Module } from '@nestjs/common';
import { InglesDetalleService } from './ingles-detalle.service';
import { InglesDetalleController } from './ingles-detalle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { InglesDetalle, InglesDetalleSchema } from './entities/ingles-detalle.entity';

@Module({
  controllers: [InglesDetalleController],
  providers: [InglesDetalleService],
  exports:[InglesDetalleService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:InglesDetalle.name,
        schema:InglesDetalleSchema,
      }
    ]),
  ]
})
export class InglesDetalleModule {}
