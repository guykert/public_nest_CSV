import { Module } from '@nestjs/common';
import { PruebaTablaConversionDetalleService } from './prueba-tabla-conversion-detalle.service';
import { PruebaTablaConversionDetalleController } from './prueba-tabla-conversion-detalle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaTablaConversionDetalle, PruebaTablaConversionDetalleSchema } from './entities/prueba-tabla-conversion-detalle.entity';

@Module({
  controllers: [PruebaTablaConversionDetalleController],
  providers: [PruebaTablaConversionDetalleService],
  exports:[PruebaTablaConversionDetalleService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaTablaConversionDetalle.name,
        schema:PruebaTablaConversionDetalleSchema,
      }
    ]),
  ]
})
export class PruebaTablaConversionDetalleModule {}
