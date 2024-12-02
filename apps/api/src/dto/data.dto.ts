import { IsNumberString, IsOptional, IsRFC3339 } from "class-validator";

export class DataDto {
    
    @IsOptional()
    @IsNumberString()
    public value1: string | null;

    @IsOptional()
    @IsNumberString()
    public value2: string | null;

    @IsOptional()
    @IsNumberString()
    public value3: string | null;

    @IsOptional()
    @IsNumberString()
    public value4: string | null;

    @IsOptional()
    @IsNumberString()
    public value5: string | null;

    @IsOptional()
    @IsNumberString()
    public value6: string | null;

    @IsOptional()
    @IsNumberString()
    public value7: string | null;

    @IsOptional()
    @IsNumberString()
    public value8: string | null;

    @IsRFC3339()
    public createdAt: string;

}
