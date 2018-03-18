import { Body, Controller, Post, Req } from '@nestjs/common';

import { EntriesService } from '../entries/entries.service';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly entriesService: EntriesService,
  ) { }

}
