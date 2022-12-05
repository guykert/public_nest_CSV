import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import mongoose from 'mongoose';

export class CreatePruebaHabilidadDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsString()
    @IsOptional()
    orden:string;

    @IsOptional()
    ramo:mongoose.Types.ObjectId;

    @IsOptional()
    nivel:mongoose.Types.ObjectId;

}