import { Module } from '@nestjs/common';
import { LetraService } from './letra.service';
import { LetraController } from './letra.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Letra, LetraSchema } from './entities/letra.entity';

@Module({
  controllers: [LetraController],
  providers: [LetraService],
  exports:[LetraService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Letra.name,
        schema:LetraSchema,
      }
    ]),
  ]
})
export class LetraModule {}
