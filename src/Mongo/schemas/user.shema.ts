import { Schema } from "mongoose";
import { DeckSchema } from "./deck.schema";

export const UserSchema = new Schema({
    
    nome: String,

    senha: String,

    decks: [DeckSchema],
})