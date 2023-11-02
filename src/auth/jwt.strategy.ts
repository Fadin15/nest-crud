import {PassportStrategy} from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import {Injectable} from '@nestjs/common'
import { jwtConstants } from './auth.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload:any){
        return { id : payload.sub, email: payload.email};
    }
}