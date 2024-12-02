import { BadRequestException, Injectable } from "@nestjs/common";
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

    async getAllUser(): Promise<User[]>{
        const getAllUsers = await this.userRepository.getUsers()
        if(!getAllUsers){
            throw new BadRequestException('Não existe Usuários Cadastrados')
        }
        return getAllUsers
    }

    async getUserById(userId:string): Promise<User>{
        
        try {
            const userSearch = await this.userRepository.getUserById(userId);
            if(!userSearch){
                throw new BadRequestException('Usuário não localizado')
            }  
            return userSearch
        } catch (error) {
            throw new BadRequestException('Usuário não localizado')
        }
                               
    }

    async deleteUserById(userId:string): Promise<User>{
        try {
            return await this.userRepository.deleteUserById(userId)
        } catch(error){
            throw new BadRequestException('Usuário não existe para exclusão')
        }
    }

    async updateUserById(userId:string, newInfo: UserDto): Promise<User>{
        const existUser = await this.userRepository.getUserById(userId)
        if(!existUser){
            throw new BadRequestException('Usuario não existe para atualização')
        }
        try {
            return await this.userRepository.updateUserById(userId,newInfo)
        } catch (error) {
            throw new BadRequestException('Não foi possivel atualizar o usuário')
        }
       
    }
    async autenticao(username:string,password:string):Promise<any>{
        try {
            const user = await this.userRepository.autenticao(username,password)
            if(!user){
                throw new BadRequestException("usuario invalido")
            }
            return user
        } catch (error) {
            throw new BadRequestException("usuario invalido")
        }
        
    }
}