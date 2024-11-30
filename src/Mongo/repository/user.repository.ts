import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../interfaces/user.interface";
import { Model } from "mongoose";
import { UserDto } from "src/DTO/user.dto";
@Injectable()
export class UserRepository {
    constructor(
        @InjectModel('user') private readonly userModel: Model<User>
    ){}

    saveUser(newUser: UserDto){
        const saveUser = new this.userModel(newUser);
        return  saveUser.save();
    }

}   