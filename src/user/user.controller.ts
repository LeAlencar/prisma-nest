import { Controller, Post, Body } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Controller()
export class UserController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
