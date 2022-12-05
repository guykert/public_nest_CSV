import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePruebaTablaConversionDetalleDto {


    @IsNumber()
    @IsNotEmpty()
    preguntas_correctas:number;

    @IsNumber()
    @IsNotEmpty()
    puntaje:number;

}
