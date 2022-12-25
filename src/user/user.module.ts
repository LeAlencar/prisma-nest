import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateUser } from './useCases/createUser';
import { GetUserByEmail } from './useCases/getUserByEmail';
import { GetUsers } from './useCases/getUsers';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser, GetUsers, GetUserByEmail],
})
export class UserModule {}
