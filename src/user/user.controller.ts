import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(
        private readonly UserService: UserService
    ){}
    
    @Get()
    async getAllUsers(){
        return this.UserService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id:string){
        return this.UserService.getUserById(id);
        
    }

    // @Patch(':id')
    // updateUser(@Param('id') id:string, @Body() updateUserDto: Prisma.UserUpdateInput){
    //     return this.UserService.updateUser(id, updateUserDto);
    // }

    // @Delete(':id')
    // deleteUser(@Param('id') id:string){
    //     return this.UserService.deleteUser(id);
    // }

    


}
