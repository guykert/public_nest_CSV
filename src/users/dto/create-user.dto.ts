import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {



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
    @MinLength(9)
    @IsOptional()
    rut?:string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    first_nameg?:string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    last_nameg?:string;

    @IsString()
    @MinLength(2)
    @IsEmail()
    @IsOptional()
    emailg?:string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    idg?:string;
    
    @IsNumber()
    @IsOptional()
    anio_predeterminado?:number;

    @IsNumber()
    @IsOptional()
    colegio_predeterminada?:number;

}
