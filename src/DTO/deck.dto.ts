import {IsArray, IsNotEmpty, IsString} from "class-validator"

export class DeckDto {
    
    @IsNotEmpty()
    @IsString()
    readonly commander: String;

    @IsNotEmpty()
    @IsArray()
    readonly deck:String[];

}