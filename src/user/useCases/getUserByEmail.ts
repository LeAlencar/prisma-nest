import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/user-repository';

@Injectable()
export class GetUserByEmail {
  constructor(private userRepository: UsersRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.getUserByEmail(email);

    return user;
  }
}
