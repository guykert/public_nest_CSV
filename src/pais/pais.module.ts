import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Pais, PaisSchema } from './entities/pais.entity';

@Module({
  controllers: [PaisController],
  providers: [PaisService],
  exports:[PaisService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Pais.name,
        schema:PaisSchema,
      }
    ]),
  ]
})
export class PaisModule {}
