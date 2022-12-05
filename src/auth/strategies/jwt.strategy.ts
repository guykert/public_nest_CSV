import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    
    @InjectModel( User.name )
    private readonly userModel: Model<User>,
    configService : ConfigService


  ) {
    super({
      
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }



  async validate(payload: JwtPayload): Promise<User> {
    const { id } = payload;

    // const user_mysql = await this.authService.validateUser(username);

    const user = await this.userModel.findOne({id});

    if( !user )
        throw new UnauthorizedException('Token not valid')

    if( !user.activo )
        throw new UnauthorizedException('User is inactive, talk with an admin')

    if( !user.activo )
        throw new UnauthorizedException('Complete the register')


    return user;

  }
}