import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import * as passport from 'passport';

import { DBModule } from '../db/db.module';
import { UserModule } from '../user/user.module';
import { PatternController } from './pattern.controller';
import { patternProviders } from './pattern.providers';
import { PatternService } from './pattern.service';

@Module({
  modules: [DBModule, UserModule],
  controllers: [PatternController],
  components: [
    ...patternProviders,
    PatternService,
  ],
  exports: [PatternService]
})

export class PatternModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes({ path: '/pattern', method: RequestMethod.ALL });
  }
}

// import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
// import * as passport from 'passport';

// import { DatabaseModule } from '../database/database.module';
// import { PatternController } from './pattern.controller';
// import { patternProviders } from './pattern.providers';
// import { PatternService } from './pattern.service';
// import { AuthService } from '../auth/auth.service';

// @Module({
//     modules: [DatabaseModule, AuthService],
//     components: [PatternService, ...patternProviders],
//     controllers: [PatternController],
//     exports: [PatternService]
// })
// export class PatternModule implements NestModule {
//   public configure(consumer: MiddlewaresConsumer) {
//     consumer
//       .apply(passport.authenticate('jwt', { session: false }))
//       .forRoutes({ path: '/pattern', method: RequestMethod.ALL });
//   }
// }