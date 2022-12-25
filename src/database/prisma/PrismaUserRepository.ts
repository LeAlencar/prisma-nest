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

  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return user;
    }
  }
}
