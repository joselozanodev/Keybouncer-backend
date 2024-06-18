import { Role } from '@prisma/client'
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator'

export class RegisterDto {

    @IsNotEmpty({message: "Email cannot be empty"})
    @IsEmail()
    email: string

    @IsNotEmpty({message: "Password cannot be empty"})
    @IsString()
    @Length(8, null, {message: "Password must be at least 8 characters long"})
    password: string;

    @IsNotEmpty({message: "Name cannot be empty"})
    @IsString()
    name: string;
    
    @IsNotEmpty({message: "Role cannot be empty"})
    @IsEnum(Role, {message: "Role must be one of these values: ADMIN, USER"})
    role: Role;

}

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty({message: "Password cannot be empty"})
    @IsString()
    password: string;


}