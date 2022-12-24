import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class GetUsers {
  constructor(private userRepository: UsersRepository) {}

  async execute() {
    const users = await this.userRepository.getUsers();

    return {
      users,
    };
  }
}
