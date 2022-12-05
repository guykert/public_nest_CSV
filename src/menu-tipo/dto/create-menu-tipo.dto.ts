import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateMenuTipoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsString()
    @IsNotEmpty()
    type:string;


}