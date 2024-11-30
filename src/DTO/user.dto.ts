import {IsArray, IsNotEmpty, IsString} from "class-validator"
import { DeckDto } from "./deck.dto";

export class UserDto {


    @IsNotEmpty()
    @IsString()
    readonly nome: String;

    @IsNotEmpty()
    @IsString()
    readonly senha: String;
    
    readonly decks: DeckDto[];

}