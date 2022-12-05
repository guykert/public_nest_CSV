import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Nivel, NivelSchema } from './entities/nivel.entity';

@Module({
  controllers: [NivelController],
  providers: [NivelService],
  exports:[NivelService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Nivel.name,
        schema:NivelSchema,
      }
    ]),
  ]
})
export class NivelModule {}
