import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './entities/userType.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}

@Injectable()
export class UserTypesService extends TypeOrmCrudService<UserType> {
  constructor(@InjectRepository(UserType) repo) {
    super(repo);
  }
}
