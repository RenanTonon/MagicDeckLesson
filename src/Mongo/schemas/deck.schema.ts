import { Schema } from "mongoose";

export const DeckSchema = new Schema({

    commander: String,

    deck:[String]
})