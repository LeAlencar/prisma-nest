import { Controller, Post, Body, Get } from '@nestjs/common';
import { createUserBody } from 'src/dtos/create-user-body';
import { CreateUser } from './useCases/createUser';
import { GetUserByEmail } from './useCases/getUserByEmail';
import { GetUsers } from './useCases/getUsers';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUsers: GetUsers,
    private readonly getUserByEmail: GetUserByEmail,
  ) {}

  @Post('register')
  async registerUser(@Body() body: createUserBody) {
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

  @Get('get')
  async GetUserByEmail(@Body() body: any) {
    const user = await this.getUserByEmail.execute(body.email);
    return user;
  }
}
