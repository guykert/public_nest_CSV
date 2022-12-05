import { Module } from '@nestjs/common';
import { RamoService } from './ramo.service';
import { RamoController } from './ramo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Ramo, RamoSchema } from './entities/ramo.entity';

@Module({
  controllers: [RamoController],
  providers: [RamoService],
  exports:[RamoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Ramo.name,
        schema:RamoSchema,
      }
    ]),
  ]
})
export class RamoModule {}
