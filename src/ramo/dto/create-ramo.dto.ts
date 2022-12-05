import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateRamoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsString()
    @IsOptional()
    codigo:string;

    @IsNumber()
    @IsOptional()
    orden:number;

    @IsNumber()
    @IsOptional()
    division_menciones:number;


}