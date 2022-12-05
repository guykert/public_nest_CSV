import { Module } from '@nestjs/common';
import { PruebaHabilidadService } from './prueba-habilidad.service';
import { PruebaHabilidadController } from './prueba-habilidad.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebaHabilidad, PruebaHabilidadSchema } from './entities/prueba-habilidad.entity';

@Module({
  controllers: [PruebaHabilidadController],
  providers: [PruebaHabilidadService],
  exports:[PruebaHabilidadService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaHabilidad.name,
        schema:PruebaHabilidadSchema,
      }
    ]),
  ]
})
export class PruebaHabilidadModule {}
