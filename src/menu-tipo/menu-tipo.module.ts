import { Module } from '@nestjs/common';
import { MenuTipoService } from './menu-tipo.service';
import { MenuTipoController } from './menu-tipo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MenuTipo, MenuTipoSchema } from './entities/menu-tipo.entity';

@Module({
  controllers: [MenuTipoController],
  providers: [MenuTipoService],
  exports:[MenuTipoService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:MenuTipo.name,
        schema:MenuTipoSchema,
      }
    ]),
  ]
})
export class MenuTipoModule {}
