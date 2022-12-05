import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ConfirmGoogleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    uidg:string;


}
