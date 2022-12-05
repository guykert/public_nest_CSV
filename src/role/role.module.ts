import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Role, RoleSchema } from './entities/role.entity';
import { PermissionModule } from '../permission/permission.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  exports:[RoleService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Role.name,
        schema:RoleSchema,
      }
    ]),
    PermissionModule,
  ]
})
export class RoleModule {}
