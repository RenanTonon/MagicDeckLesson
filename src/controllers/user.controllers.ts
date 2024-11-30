import {Get, Delete, Patch, Controller, Body, Post} from "@nestjs/common"

import { UserDto } from "src/DTO/user.dto"
import { User } from "src/Mongo/interfaces/user.interface";
import { UserService } from "src/services/user.services"

@Controller('users')
export class UserController {

    constructor(
        private readonly userService : UserService
    ){}

    @Patch()
    async getAllUsers(@Body() newUser: UserDto):Promise<User>{
        
        const saveUser = await this.userService.saveUser(newUser);
        return saveUser;
    }

}