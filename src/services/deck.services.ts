import { BadRequestException, Injectable } from "@nestjs/common";
import { DeckDto } from "src/DTO/deck.dto";
import { Deck } from "src/Mongo/interfaces/deck.interface";
import { DeckRepository } from "src/Mongo/repository/deck.repository";


@Injectable()
export class DeckService {
    
    constructor(
        private readonly deckRepository : DeckRepository
    ){}
    
    async getAllDeck(): Promise<Deck[]>{
        try{
            const decks = await this.deckRepository.getAllDeck()
            if(!decks){
                throw new BadRequestException("Nenhum Deck cadastrado")
            }
            return decks
        }catch(error){
            throw new BadRequestException("Nenhum Deck cadastrado")
        }
        
    }

    async getDeckById(deckId:string):Promise<Deck>{
        try{
            const existDeck = await this.deckRepository.getDeckById(deckId)
            if(!existDeck){
                throw new BadRequestException('Deck não localizado')
            }
            return existDeck
        }catch(erro){
            throw new BadRequestException('Deck não localizado')
        }
    }

    async createDeck(newDeck: DeckDto): Promise<Deck>{
        try{
            return await this.deckRepository.createDeck(newDeck)
        }catch(erro){
            throw new BadRequestException('Não foi possivel criar o Deck')
        }
    }

    async updateDeckById(deckId:string,deckInfo:DeckDto): Promise<Deck>{
        try{
            const decks = await this.deckRepository.getDeckById(deckId)
            if(!decks){
                throw new BadRequestException('Deck não localizado para atualizar')
            }
            return await this.deckRepository.updateDeckById(deckId,deckInfo)
        }catch(erro){
            throw new BadRequestException('Deck não localizado para atualizar')
        }
    }

    async deleteDeckById(deckId:string):Promise<Deck>{
        try{
            const existDeck = await this.deckRepository.getDeckById(deckId)
            if(!existDeck){
                throw new BadRequestException('Deck não localizado para excluir')
            }
            return await this.deckRepository.deleteDeckById(deckId)
        }catch(erro){
            throw new BadRequestException('Deck não localizado para excluir')
        }
    }
}