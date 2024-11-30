import * as mongoose from "mongoose";
import { Document } from "mongoose";

export interface User extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly nome: string,
    readonly senha: string,
    readonly decks: object,
}