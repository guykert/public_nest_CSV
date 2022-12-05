import { IsOptional, IsPositive, Min, IsNumber, IsString } from 'class-validator'

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    page?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    items_per_page?: number;

    @IsOptional()
    @IsString()
    search?: string;

}