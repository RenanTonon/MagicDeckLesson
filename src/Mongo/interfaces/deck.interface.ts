import * as mongoose from "mongoose";
import { Document } from "mongoose";

export interface Deck extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly commander: String,
    readonly deck: object,
}