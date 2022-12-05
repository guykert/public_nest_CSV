import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import mongoose from 'mongoose';

export class CreatePruebaSubEjeTematicoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsNumber()
    @IsOptional()
    orden:number;

    @IsOptional()
    ramo:mongoose.Types.ObjectId;


}