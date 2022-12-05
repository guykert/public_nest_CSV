import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MailgunModule } from 'nestjs-mailgun';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports:[
    ConfigModule,
    UsersModule,
    PassportModule.register({defaultStrategy: 'jwt'}),

    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService : ConfigService)=> {
        // console.log('JWT Secret : ' + configService.get('JWT_SECRET'));
        // console.log('JWT Secret : ' + process.env.JWT_SECRET);
        return {
          secret:configService.get('JWT_SECRET'),
          signOptions:{
            expiresIn:'2h'
          }
        }
      }
    }),

    // MailgunModule.forRoot({
    //   username: 'csv.cl',
    //   key: 'sdfsdfsdf',
    //   // public_key: 'string', // OPTIONAL
    //   // timeout: 'number', // OPTIONAL, in milliseconds
    //   // url: 'string', // OPTIONAL, default: 'api.mailgun.net'. Note that if you are using the EU region the host should be set to 'api.eu.mailgun.net'
    // }),

    MailgunModule.forAsyncRoot({
      useFactory: async () => {
        return {
          username: 'csv.cl',
          key: 'sdfsdfsdf',
          // public_key: 'string', // OPTIONAL
          // timeout: 'number', // OPTIONAL, in milliseconds
          // url: 'string', // OPTIONAL, default: 'api.mailgun.net'. Note that if you are using the EU region the host should be set to 'api.eu.mailgun.net'
        };
      },
    }),

    // JwtModule.registerAsync({
    //   imports:[],
    //   inject:[],
    //   useFactory: ()=> {
    //     // console.log('JWT Secret : ' + process.env.JWT_SECRET);
    //     return {
    //       secret:process.env.JWT_SECRET,
    //       signOptions:{
    //         expiresIn:'2h'
    //       }
    //     }
    //   }
    // })

    // JwtModule.register({
    //   secret:process.env.JWT_SECRET,
    //   signOptions:{
    //     expiresIn:'2h'
    //   }
    // })
  ],
  exports:[JwtStrategy, PassportModule, JwtModule]
})
export class AuthModule {}
