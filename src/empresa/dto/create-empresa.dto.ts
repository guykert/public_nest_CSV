import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateEmpresaDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsString()
    @IsOptional()
    identificador:string;

    @IsString()
    @IsOptional()
    rbd:string;

    @IsString()
    @IsOptional()
    encargado:string;

    @IsString()
    @IsOptional()
    telefono:string;

    @IsString()
    @IsOptional()
    telefono2:string;

    @IsString()
    @IsOptional()
    contacto:string;

    @IsString()
    @IsOptional()
    imagen:string;

}
