import { Module } from '@nestjs/common';
import { TipoEmpresaService } from './tipo-empresa.service';
import { TipoEmpresaController } from './tipo-empresa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TipoEmpresa, TipoEmpresaSchema } from './entities/tipo-empresa.entity';

@Module({
  controllers: [TipoEmpresaController],
  providers: [TipoEmpresaService],
  exports:[TipoEmpresaService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:TipoEmpresa.name,
        schema:TipoEmpresaSchema,
      }
    ]),
  ]
})
export class TipoEmpresaModule {}
