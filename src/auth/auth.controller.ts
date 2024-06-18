import { Controller, Post, Body,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Tokens } from './types';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {


    constructor(
        private readonly authService: AuthService
    ){}

    // @Post('/local/signup')
    // localSignup(@Body() dto: RegisterDto):Promise<Tokens>  {
    //     return this.authService.localSignup(dto);
    // }

    // @Post('/local/login')
    // localLogin(@Body() dto: LoginDto):Promise<Tokens>  {
    //     return this.authService.localLogin(dto);
    // }


}
