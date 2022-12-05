import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ConfiguracionAnio } from "../../configuracion-anios/entities/configuracion-anio.entity";
import mongoose from 'mongoose';

export class CreatePruebaTablaComversionDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsOptional()
    anio:mongoose.Types.ObjectId;


}