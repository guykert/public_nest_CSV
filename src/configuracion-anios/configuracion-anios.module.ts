import { Module } from '@nestjs/common';
import { ConfiguracionAniosService } from './configuracion-anios.service';
import { ConfiguracionAniosController } from './configuracion-anios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConfiguracionAnio, ConfiguracionAnioSchema } from './entities/configuracion-anio.entity';

@Module({
  controllers: [ConfiguracionAniosController],
  providers: [ConfiguracionAniosService],
  exports:[ConfiguracionAniosService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:ConfiguracionAnio.name,
        schema:ConfiguracionAnioSchema,
      }
    ]),
  ]
})
export class ConfiguracionAniosModule {}
