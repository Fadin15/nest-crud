import { IsString, IsEmail } from "class-validator";

export class createUserDto {
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;

}