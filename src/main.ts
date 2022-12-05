import { Logger,ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const logger = new Logger();

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
     transform: true,
     whitelist: true,
     forbidNonWhitelisted: true,
     transformOptions:{
      enableImplicitConversion:true
     }
    })
  );

  await app.listen(process.env.PORT);

  logger.log(`Server is running in ${await app.getUrl()}`);

  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
