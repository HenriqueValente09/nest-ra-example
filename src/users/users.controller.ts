import { Controller } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { UsersService, UserTypesService } from './users.service';
import { UserType } from './entities/userType.entity';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}

@Crud({
  model: {
    type: UserType,
  },
})
@Controller('user-types')
export class UserTypesController implements CrudController<UserType> {
  constructor(public service: UserTypesService) {}
}