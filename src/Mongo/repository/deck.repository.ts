import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Deck } from "../interfaces/deck.interface";
import { DeckDto } from "src/DTO/deck.dto";

@Injectable()
export class DeckRepository {
    constructor(
        @InjectModel('deck') private readonly deckModel: Model<Deck>
    ){}

    async getAllDeck(): Promise<Deck[]>{
        return await this.deckModel.find({},{ __v:false})
    }    

    async getDeckById(deckId:string):Promise<Deck>{
        return await this.deckModel.findById(deckId)
    }

    async createDeck(newDeck:DeckDto):Promise<Deck>{
        const newDecki = await new this.deckModel(newDeck)
        return newDecki.save()
    }

    async updateDeckById(deckId:string,deckInfo:DeckDto):Promise<Deck>{
        return await this.deckModel.findOneAndReplace({ _id: deckId}, deckInfo,{new:true})
    }

    async deleteDeckById(deckId:string):Promise<Deck>{
        return await this.deckModel.findOneAndDelete({_id: deckId})
    }
}