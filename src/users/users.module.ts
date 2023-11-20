import { Module } from '@nestjs/common';
import { UsersService, UserTypesService } from './users.service';
import { UsersController, UserTypesController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserType } from './entities/userType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserType])],
  controllers: [UsersController, UserTypesController],
  providers: [UsersService, UserTypesService],
})
export class UsersModule {}