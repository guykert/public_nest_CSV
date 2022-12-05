import { Module } from '@nestjs/common';
import { PruebaPautaService } from './prueba-pauta.service';
import { PruebaPautaController } from './prueba-pauta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaPauta, PruebaPautaSchema } from './entities/prueba-pauta.entity';

@Module({
  controllers: [PruebaPautaController],
  providers: [PruebaPautaService],
  exports:[PruebaPautaService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaPauta.name,
        schema:PruebaPautaSchema,
      }
    ]),
  ]
})
export class PruebaPautaModule {}
