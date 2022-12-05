import { Injectable, NotFoundException,BadRequestException,InternalServerErrorException,UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from '../users/entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegisterGoogleDto } from './dto/register-google.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfirmGoogleDto } from './dto/confirmGoogle.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ConfigService } from '@nestjs/config';
import { EmailOptions } from '../common/mailgun/email-options';
import { MailgunService } from 'nestjs-mailgun';
import { MailgunMessageData } from 'nestjs-mailgun'
import { ChangePasswordDto } from './dto/changePassword.dto';

@Injectable()
export class AuthService {

  constructor(

    @InjectModel( User.name )
    private readonly userModel: Model<User>,

    private readonly jwtService:JwtService,

    private readonly configService:ConfigService,

    private mailgunService: MailgunService

    ) {


    }

  async create(registerDto: RegisterDto) {

      // priomero confirmo que el email no esté registrado

      
      const user = await this.userModel.findOne({email : registerDto.email, registrado: true}).lean();

      if ( user ) {
        // el usuario ya está registrado
        throw new NotFoundException(`el usuario ya está registrado`);
      }

      // Si el registro está incompleto genero la nueva password

      const userRegistradoIncompleto = await this.userModel.findOne({email : registerDto.email}).lean();

      const { password , ...userData} = registerDto;

      if(userRegistradoIncompleto){

        

        try {

          const user = await this.userModel.findOneAndUpdate({ _id: userRegistradoIncompleto._id}, {
            ...userData,
            registrado:true,
            updatedAt: new Date(),
            password: bcrypt.hashSync(password, 10),
          }, { new: true }).lean();


          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
    
        } catch (error) {
    
          this.handleException(error);
    
        }
      }else{



        try {
          const user = await  this.userModel.create({
            ...userData,
            registrado:true,
            createdAt: new Date(),
            password: bcrypt.hashSync(password, 10),
          });
  
          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
  
        } catch (error) {
  
          this.handleException(error);
  
        }
      }


  }



  async login(loginDto: LoginDto) {

    // priomero confirmo que el email no esté registrado

    
    const { email, password } = loginDto;


    const user = await this.userModel.findOne({email,registrado:1}, {_id:1, email:1, first_name:1,last_name:1,password:1}).lean();

    if( !user )
      throw new UnauthorizedException('Credential are not valid')
    
    if( !bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credential are not valid')

    delete user.password;

    return {
      ...user,
      name: `${user.first_name} ${user.last_name}`,
      ok:true,
      api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
    }




  }

  async confirmg(confirmGoogleDto: ConfirmGoogleDto) {

    // priomero confirmo que el email no esté registrado

    
    const { uidg } = confirmGoogleDto;


    const user = await this.userModel.findOne({uidg}).lean();

    if( !user )
      return {
        ok:false,
      }


    return {
      ...user,
      name: `${user.first_name} ${user.last_name}`,
      ok:true,
      api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
    }




  }

  async createGoogle(registerGoogleDto: RegisterGoogleDto) {

    // priomero confirmo que el email no esté registrado

    const user = await this.userModel.findOne({uidg : registerGoogleDto.uidg, registrado: true}).lean();

    if ( user ) {
      // el usuario ya está registrado
      throw new NotFoundException(`el usuario ya está registrado`);
    }

    // Si el registro está incompleto genero la nueva password

    const userRegistradoIncompleto = await this.userModel.findOne({email:registerGoogleDto.email, registrado: false}).lean();

    const { password , ...userData} = registerGoogleDto;

    // console.log(userRegistradoIncompleto);

    if(userRegistradoIncompleto){

      try {
        if(password){
          const user = await this.userModel.findOneAndUpdate({ _id: userRegistradoIncompleto._id}, {
            ...userData,
            registrado:true,
            updatedAt: new Date(),
            password: bcrypt.hashSync(password, 10),
          }, { new: true });

          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
        }else{
          const user = await this.userModel.findOneAndUpdate({ _id: userRegistradoIncompleto._id}, {
            ...userData,
            registrado:true,
            updatedAt: new Date(),
          }, { new: true });

          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
        }


  
      } catch (error) {

        
  
        this.handleException(error);
  
      }
    }else{

      console.log(password);

      try {
        if(password){
          const user = await  this.userModel.create({
            ...userData,
            registrado:true,
            createdAt: new Date(),
            password: bcrypt.hashSync(password, 10),
          });

          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
        }else{

          
          const user = await  this.userModel.create({
            ...userData,
            registrado:true,
            createdAt: new Date(),
          });

          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`,
            ok:true,
            api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
          }
        }



      } catch (error) {

        console.log(error);

        this.handleException(error);

      }
    }


  }

  async checkAuthStatus(user:User) {

    return {
      ...user.toObject(),
      token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado})
    }

  }

  async changePassword(user:User,changePasswordDto: ChangePasswordDto) {

    // priomero confirmo que el email no esté registrado

    const {id} = user;


    // Si el registro está incompleto genero la nueva password

    const userdb = await this.userModel.findOne({_id:id}).lean();

    if ( !userdb ) {
      // el usuario ya está registrado
      throw new NotFoundException(`The user not exist`);
    }

    const { password } = changePasswordDto;


      try {

        const user = await this.userModel.findOneAndUpdate({ _id: userdb._id}, {
          ...userdb,
          updatedAt: new Date(),
          password: bcrypt.hashSync(password, 10),
        }, { new: true }).lean();


        return {
          ...user,
          name: `${user.first_name} ${user.last_name}`,
          ok:true,
          api_token: this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado })
        }
  
      } catch (error) {
  
        this.handleException(error);
  
      }


  }

  private getJwtToken(payload:JwtPayload){

    const token = this.jwtService.sign(payload);

    return token;

  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto){

    const { email } = forgotPasswordDto;

    //console.log('recuperarClave service  username : ' + username);

    const user = await this.userModel.findOne({ email });

    //console.log(user);

    if(user === null)
    throw new UnauthorizedException('Credential are not valid')

    //console.log('recuperarClave service  activo : ' + user.activo);

    if(user.activo !== true)
      throw new BadRequestException('Usuario Inactivo');

    const token = this.getJwtToken({id: user.id, activo: user.activo, registrado: user.registrado });


    const nombreCompleto = `${user.first_name} ${user.last_name}`;


    const urlRecuperarClave = `${this.configService.get('SERVERURLFRONT')}recuperar-clave/${token}`;

    // const resipients = {
    //     "alumno": "nombre_alumno",
    //     "token": "token",
    //     "urlRecuperarClave": "urlRecuperarClave"

    // };

    // const resipients2 = {
    //     alumno: "nombre_alumno",
    //     token: "token",
    //     urlRecuperarClave: "urlRecuperarClave"

    // };

    const resipients3 = "{\"alumno\": \"" + nombreCompleto + "\",\"token\": \"" + token + "\",\"urlRecuperarClave\": \"" + urlRecuperarClave + "\"}";


    //const resipients4 = "{alumno: \"nombre_alumno\",token: \"token\",urlRecuperarClave: \"urlRecuperarClave\"}";
    



    const options: MailgunMessageData = {
      from: 'subenotas@preupdv.cl',
      to: user.email,
      subject: 'Recuperar Clave',
      template: 'password-recovery',
      'h:X-Mailgun-Variables': resipients3,
    };



    await this.mailgunService.createEmail('preupdv.cl',options);

    //console.log('recuperarClave server : ' + urlRecuperarClave);
    

  }

  private handleException( error: any ){

    switch (error.code) {
      case 11000: // duplicate exception
        throw new BadRequestException(`El usuario ya existe en la base de datos ${ JSON.stringify( error.keyValue )}`);
      default:
        throw new InternalServerErrorException(`Can't create user - check server logs`);
    }

  }
}
