import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateIngleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string;

    @IsString()
    @IsOptional()
    description:string;


}