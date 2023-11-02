import { Request } from 'express';
import { Controller, Get, Post ,Req ,Param ,Delete ,Patch, Body, ParseIntPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { AnyCnameRecord } from 'dns';
import { UpdateUserDto } from './dto/update-user.dto';
import { createUserDto } from './dto/create-user-dto';


@Controller('/user')
export class UserController {

  constructor(private userService:UserService) {}
    @Get()
    getUsers() {
      return this.userService.get();     
      // return {name: 'fadin' , email:'fadin ahammed@gmail.com'};
    }
  
    @Post()
    store(@Body() createUserDto: createUserDto){
      return this.userService.create(createUserDto);
    }
  
    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto,
    @Param('userId',ParseIntPipe) userId:number){
      return this.userService.update(updateUserDto,userId);
    }
  
  
    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId: number){
      return this.userService.show(userId);
    }
  
    @Delete('/:userId')
    deleteUser(@Param('userId',ParseIntPipe) userId: number){
      return this.userService.delete(userId);
    }
}
