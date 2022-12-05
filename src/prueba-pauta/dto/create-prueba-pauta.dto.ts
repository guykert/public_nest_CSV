import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import mongoose from 'mongoose';

export class CreatePruebaPautaDto {

    @IsNumber()
    @IsNotEmpty()
    numero_pregunta:number;

    @IsString()
    @IsOptional()
    correcta:string;

    @IsOptional()
    eje_tematico:mongoose.Types.ObjectId;

    @IsOptional()
    habilidad_id:mongoose.Types.ObjectId;


}