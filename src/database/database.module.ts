import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/user-repository';
import { PrismaService } from './prisma.service';
import { PrismaUserRepository } from './prisma/PrismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UsersRepository],
})
export class DatabaseModule {}
