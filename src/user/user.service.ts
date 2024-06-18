import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly PrismaService: PrismaService) {}

  async getAllUsers() {
    const users = await this.PrismaService.user.findMany();

    if (users.length === 0)
      throw new NotFoundException('Not users found. Create your first user.');

    return users;
  }

  async getUserById(id: string) {
    const user = await this.PrismaService.user.findUnique({ where: { id } });

    if(!user) throw new NotFoundException(`The user with the id: ${id}. Was not found, please check the id and try again.`)

    return user
  }
}
