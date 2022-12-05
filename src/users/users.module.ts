import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';
import {ConfigModule} from '@nestjs/config'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService,MongooseModule],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:User.name,
        schema:UserSchema,
      }
    ]),
  ]
})
export class UsersModule {}
