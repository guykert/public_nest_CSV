import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateConfiguracionAnioDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;

    @IsBoolean()
    @IsOptional()
    forzado:string;

}
