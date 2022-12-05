import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionSchema } from './entities/permission.entity';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  exports:[PermissionService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Permission.name,
        schema:PermissionSchema,
      }
    ]),
  ]
})
export class PermissionModule {}
