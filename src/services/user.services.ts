import { Injectable } from "@nestjs/common";
import { UserDto } from "src/DTO/user.dto";
import { User } from "src/Mongo/interfaces/user.interface";
import { UserRepository } from "src/Mongo/repository/user.repository";

@Injectable()
export class UserService {
    
    constructor(
        private readonly userRepository : UserRepository
    ){}

    async saveUser(newUser: UserDto): Promise<User>{
        const saveUser = await this.userRepository.saveUser(newUser);
        return saveUser; 
    }
}