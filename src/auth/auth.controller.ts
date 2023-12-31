import { Body, Controller, Post, UseGuards,Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

   @UseGuards(AuthGuard('local'))
    @Post('/login') 
    async login(@Request() req:any){
        return this.authService.login(req.user) ;
    }
}
