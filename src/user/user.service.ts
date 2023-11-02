import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}


    get(): Promise<User[]>{
        console.log('hhhhhhhhhhh')
        return this.userRepository.find();
    }

    create(createUserDto: createUserDto){
        return this.userRepository.save(createUserDto);
    }


    update(updateUserDto: UpdateUserDto, userId:number){
        return this.userRepository.update(userId,updateUserDto);
    }

    show(id:number){
        return this.userRepository.findOne({where : {id} });
    }

    findByEmail(email: string){
        return this.userRepository.findOne({where : {email}});
    }

    delete(userId:number){
        return this.userRepository.delete(userId);
    }

}
