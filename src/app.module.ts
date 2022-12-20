import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, PostController, UserController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
