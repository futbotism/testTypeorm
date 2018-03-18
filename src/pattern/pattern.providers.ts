import { Connection } from 'typeorm';

import { Pattern } from './pattern.entity';

export const patternProviders = [{
  provide: 'PatternRepositoryToken',
  useFactory: (connection: Connection) => connection.getRepository(Pattern),
  inject: ['DbConnectionToken'],
}];