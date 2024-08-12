import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body('username') username: string, @Body('email') email: string): Promise<User> {
    return this.userService.createUser(username, email);
  }
}
