import { Module } from '@nestjs/common';
import { PruebaSubEjeTematicoService } from './prueba-sub-eje-tematico.service';
import { PruebaSubEjeTematicoController } from './prueba-sub-eje-tematico.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaSubEjeTematico, PruebaSubEjeTematicoSchema } from './entities/prueba-sub-eje-tematico.entity';

@Module({
  controllers: [PruebaSubEjeTematicoController],
  providers: [PruebaSubEjeTematicoService],
  exports:[PruebaSubEjeTematicoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaSubEjeTematico.name,
        schema:PruebaSubEjeTematicoSchema,
      }
    ]),
  ]
})
export class PruebaSubEjeTematicoModule {}
