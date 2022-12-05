import { Module } from '@nestjs/common';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Dia, DiaSchema } from './entities/dia.entity';

@Module({
  controllers: [DiaController],
  providers: [DiaService],
  exports:[DiaService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Dia.name,
        schema:DiaSchema,
      }
    ]),
  ]
})
export class DiaModule {}
