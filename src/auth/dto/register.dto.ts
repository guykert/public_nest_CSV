import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength,MaxLength, Matches } from "class-validator";

export class RegisterDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    first_name:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    last_name:string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    m_last_name?:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password:string;


}
