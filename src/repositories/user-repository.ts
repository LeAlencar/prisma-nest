export interface User {
  username?: string;
  email: string;
  password: string;
}

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract getUsers(): Promise<User[]>;
}
