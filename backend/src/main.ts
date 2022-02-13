import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  const PORT = 3500;
  await app.listen(PORT);

  console.log(`Application is working on server - ${PORT}`);
}
bootstrap();
