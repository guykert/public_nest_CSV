import { IsEmail, IsNotEmpty, IsString, MinLength,MaxLength, Matches } from "class-validator";

export class LoginDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password:string;


}
