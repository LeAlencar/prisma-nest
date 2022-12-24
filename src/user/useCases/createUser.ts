import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/user-repository';

interface UserRequest {
  email: string;
  username: string;
  password: string;
}

interface UserResponse {
  email: string;
  username: string;
  message: string;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UsersRepository) {}

  async execute(request: UserRequest): Promise<UserResponse> {
    const { email, username, password } = request;
    await this.userRepository.create({ email, password, username });

    return {
      email,
      username,
      message: 'User created',
    };
  }
}
