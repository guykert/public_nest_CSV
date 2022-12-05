import { Module } from '@nestjs/common';
import { PruebaTablaComversionService } from './prueba-tabla-comversion.service';
import { PruebaTablaComversionController } from './prueba-tabla-comversion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaTablaComversion, PruebaTablaComversionSchema } from './entities/prueba-tabla-comversion.entity';

@Module({
  controllers: [PruebaTablaComversionController],
  providers: [PruebaTablaComversionService],
  exports:[PruebaTablaComversionService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaTablaComversion.name,
        schema:PruebaTablaComversionSchema,
      }
    ]),
  ]
})
export class PruebaTablaComversionModule {}
