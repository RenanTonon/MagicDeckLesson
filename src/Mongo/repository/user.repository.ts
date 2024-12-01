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

    async saveUser(newUser: UserDto):Promise<User>{
        const saveUser = new this.userModel(newUser);
        return  saveUser.save();
    }

    async getUsers():Promise<User[]>{
        return await this.userModel.find({},{ __v:false})
    }

    async getUserById(userId:string):Promise<User>{
        return await this.userModel.findById(userId);
        
    }

    async deleteUserById(userId:string):Promise<User>{
        return await this.userModel.findOneAndDelete({_id: userId})
    }

    async updateUserById(userId:string , newInfo:UserDto): Promise<User>{
        return await this.userModel.findOneAndReplace({ _id: userId}, newInfo,{new:true})
    }
}   