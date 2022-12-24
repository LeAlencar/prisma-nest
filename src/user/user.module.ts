import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { PostService } from 'src/post/post.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [PrismaService, UserService, PostService],
})
export class UserModule {}
