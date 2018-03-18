import { Body, Controller, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('sign-in')
  async signIn(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.find(createUserDto);

    return this.authService
      .createToken({
        email: user.email,
        id: user.id
      })
      .then(token => {
        return {
          user, token
        };
      });
  }
}
