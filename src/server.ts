import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { ApplicationModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  app.setGlobalPrefix('api/v1');
  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
}

bootstrap();
