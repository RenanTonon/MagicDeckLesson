import {Get, Delete, Patch, Controller, Body, Post, Param} from "@nestjs/common"
import { DeckDto } from "src/DTO/deck.dto"
import { Deck } from "src/Mongo/interfaces/deck.interface"
import { DeckService } from "src/services/deck.services"

@Controller('decks')
export class DeckController {
    
    constructor(
        private readonly deckService : DeckService
    ){}

    @Get()
    async getAllDeck(): Promise<Deck[]>{
        return await this.deckService.getAllDeck()
    }
    
    @Get(':id')
    async getDeckById(@Param('id') deckId: string):Promise<Deck>{
        return await this.deckService.getDeckById(deckId)
    }
    @Post()
    async createDeck(@Body() newDeck: DeckDto): Promise<Deck>{
        return await this.deckService.createDeck(newDeck)
    }

    @Patch(':id')
    async updateDeckById(@Param('id') deckId:string, @Body() deckInfo:DeckDto):Promise<Deck>{
        return await this.deckService.updateDeckById(deckId,deckInfo)
    }

    @Delete(':id')
    async deleteDeckById(@Param('id') deckId:string):Promise<Deck>{
        return await this.deckService.deleteDeckById(deckId)
    }
}