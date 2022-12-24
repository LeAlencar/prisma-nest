import { Controller, Post, Body, Get } from '@nestjs/common';
import { createUserBody } from 'src/dtos/create-user-body';
import { CreateUser } from './useCases/createUser';
import { GetUsers } from './useCases/getAllUsers';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUsers: GetUsers,
  ) {}

  @Post()
  async signupUser(@Body() body: createUserBody) {
    const { email, username, message } = await this.createUser.execute(body);

    return {
      username,
      email,
      message,
    };
  }

  @Get()
  async allUsers() {
    const { users } = await this.getUsers.execute();

    return users;
  }
}
