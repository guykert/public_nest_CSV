import { IsNotEmpty, IsString, MinLength, IsOptional, IsArray } from "class-validator";
import { Role } from "src/role/entities/role.entity";

export class CreateProyectoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsOptional()
    @IsArray()
    roles?:[Role];

}
