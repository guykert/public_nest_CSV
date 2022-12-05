import { IsNotEmpty, IsString, MinLength, IsOptional, IsArray } from "class-validator";
import { Permission } from "../../permission/entities/permission.entity";

export class CreateRoleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsOptional()
    @IsArray()
    permissions?:Permission[];

}