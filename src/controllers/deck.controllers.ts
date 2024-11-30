import {Get, Delete, Patch, Controller, Body} from "@nestjs/common"
import { DeckDto } from "src/DTO/deck.dto"

@Controller('deck')
export class DeckController {
    
    @Get()
    getAllDeck(@Body() newDeck: DeckDto): DeckDto {
        return newDeck;
    }


}