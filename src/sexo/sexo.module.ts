import { Module } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoController } from './sexo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Sexo, SexoSchema } from './entities/sexo.entity';

@Module({
  controllers: [SexoController],
  providers: [SexoService],
  exports:[SexoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Sexo.name,
        schema:SexoSchema,
      }
    ]),
  ]
})
export class SexoModule {}
