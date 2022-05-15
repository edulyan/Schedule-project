import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();

  const PORT = 3500;
  await app.listen(PORT);

  console.log(`Application is working on server - ${PORT}`);
}
bootstrap();
