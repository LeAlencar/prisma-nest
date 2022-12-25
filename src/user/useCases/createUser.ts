import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcryptjs';
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

    const userExists = await this.userRepository.getUserByEmail(email);

    if (userExists) {
      return {
        username: userExists.username,
        email: userExists.email,
        message: 'User Already exists',
      };
    }

    const hashedPassword = hashSync(password, 10);

    await this.userRepository.create({
      email,
      password: hashedPassword,
      username,
    });

    return {
      email,
      username,
      message: 'User created',
    };
  }
}
