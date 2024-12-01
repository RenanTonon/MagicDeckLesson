import {Get, Delete, Patch, Controller, Body, Post, Param} from "@nestjs/common"

import { UserDto } from "src/DTO/user.dto"
import { User } from "src/Mongo/interfaces/user.interface";
import { UserService } from "src/services/user.services"

@Controller('users')
export class UserController {

    constructor(
        private readonly userService : UserService
    ){}
    
    @Post()
    async createUser(@Body() newUser: UserDto):Promise<User>{
        
        const saveUser = await this.userService.saveUser(newUser);
        return saveUser;
    }
    
    @Get()
    async getAllUser():Promise<User[]>{
        const getUsers = await this.userService.getAllUser()
        return getUsers
    }

    @Get(':UserId')
    async getUserById(@Param('UserId') userId: string):Promise<User>{
        return await this.userService.getUserById(userId)
    }

    @Delete(':UserId')
    async deleteUserById(@Param('UserId') userId: string):Promise<User>{
        return await this.userService.deleteUserById(userId)
    }

    @Patch(':UserId')
    async updateUserById(@Param('UserId') userId: string, @Body() newInfo: UserDto):Promise<User>{
        return await this.userService.updateUserById(userId,newInfo)
    }
/*
    @Patch()


*/
}