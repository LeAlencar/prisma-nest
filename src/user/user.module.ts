import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateUser } from './useCases/createUser';
import { GetUsers } from './useCases/getAllUsers';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser, GetUsers],
})
export class UserModule {}
