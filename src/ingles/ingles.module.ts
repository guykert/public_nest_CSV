import { Module } from '@nestjs/common';
import { InglesService } from './ingles.service';
import { InglesController } from './ingles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Ingle, IngleSchema } from './entities/ingle.entity';

@Module({
  controllers: [InglesController],
  providers: [InglesService],
  exports:[InglesService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Ingle.name,
        schema:IngleSchema,
      }
    ]),
  ]
})
export class InglesModule {}
