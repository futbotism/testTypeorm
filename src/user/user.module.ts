import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { EntriesModule } from '../entries/entries.module';

@Module({
  modules: [DBModule, EntriesModule],
  controllers: [UserController],
  components: [
    ...userProviders,
    UserService,
  ],
  exports: [UserService]
})

export class UserModule { }
