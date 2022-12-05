import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class ForgotPasswordDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @IsEmail()
    email:string;



}
