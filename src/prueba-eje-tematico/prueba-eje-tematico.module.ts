import { Module } from '@nestjs/common';
import { PruebaEjeTematicoService } from './prueba-eje-tematico.service';
import { PruebaEjeTematicoController } from './prueba-eje-tematico.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebaEjeTematico, PruebaEjeTematicoSchema } from './entities/prueba-eje-tematico.entity';

@Module({
  controllers: [PruebaEjeTematicoController],
  providers: [PruebaEjeTematicoService],
  exports:[PruebaEjeTematicoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaEjeTematico.name,
        schema:PruebaEjeTematicoSchema,
      }
    ]),
  ]
})
export class PruebaEjeTematicoModule {}
