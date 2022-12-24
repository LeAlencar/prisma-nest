import { Injectable } from '@nestjs/common';
import { User, UsersRepository } from 'src/repositories/user-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user,
    });
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }
}
