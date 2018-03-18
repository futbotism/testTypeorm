import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  modules: [UserModule],
  controllers: [AuthController],
  components: [AuthService, JwtStrategy],
})
export class AuthModule { }
