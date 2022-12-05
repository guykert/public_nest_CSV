import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Menu, MenuSchema } from './entities/menu.entity';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  exports:[MenuService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Menu.name,
        schema:MenuSchema,
      }
    ]),
  ]
})
export class MenuModule {}
