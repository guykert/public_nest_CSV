import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import mongoose from 'mongoose';


export class CreatePruebaEjeTematicoDto {

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

    @IsString()
    ramo:mongoose.Types.ObjectId;

    // @Prop({ type: Ramo })
    // ramo:Ramo;

    // @Prop({ type: Nivel })
    // nivel:Nivel;

    @IsString()
    nivel:mongoose.Types.ObjectId;

}