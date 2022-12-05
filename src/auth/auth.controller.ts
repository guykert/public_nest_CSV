import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req , Headers, SetMetadata} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterGoogleDto } from './dto/register-google.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '../users/entities/user.entity';
import { RawHeaders } from './decorators/row-headers.decorator';
import { IncomingHttpHeaders } from 'http';
import { UserRoleGuard } from './guards/user-role.guard';
import { META_ROLES, RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorator';
import { ConfirmGoogleDto } from './dto/confirmGoogle.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() registerDto: RegisterDto) {

    return this.authService.create(registerDto);

  }

  @Post('register-google')
  createGoogle(@Body() registerGoogleDto: RegisterGoogleDto) {
    return this.authService.createGoogle(registerGoogleDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('confirmg')
  confirmg(@Body() confirmGoogleDto: ConfirmGoogleDto) {
    return this.authService.confirmg(confirmGoogleDto);
  }

  @Post('forgotpass')
  forgotpass(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Post('renew')
  @Auth()
  checkAuthStatus(
    // @Req() request: Express.Request
    @GetUser() user:User,
  ) {

    return  this.authService.checkAuthStatus(user);

  }

  @Post('change_password')
  @Auth()
  changePassword(
    // @Req() request: Express.Request
    @GetUser() user:User,
    @Body() changePasswordDto: ChangePasswordDto
  ) {

    return  this.authService.changePassword(user,changePasswordDto);

  }


}
