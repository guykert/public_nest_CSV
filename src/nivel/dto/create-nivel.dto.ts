import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateNivelDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsString()
    @IsOptional()
    ciclo:string;

}