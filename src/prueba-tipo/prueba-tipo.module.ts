import { Module } from '@nestjs/common';
import { PruebaTipoService } from './prueba-tipo.service';
import { PruebaTipoController } from './prueba-tipo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PruebaTipo, PruebaTipoSchema } from './entities/prueba-tipo.entity';

@Module({
  controllers: [PruebaTipoController],
  providers: [PruebaTipoService],
  exports:[PruebaTipoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:PruebaTipo.name,
        schema:PruebaTipoSchema,
      }
    ]),
  ]
})
export class PruebaTipoModule {}
