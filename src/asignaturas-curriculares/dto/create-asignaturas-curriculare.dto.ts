import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAsignaturasCurriculareDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly name:string;

    @IsString()
    @IsOptional()
    readonly description:string;

}
