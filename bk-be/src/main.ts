import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3000);
  const corsOrigins = process.env.CORS_ORIGINS?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (process.env.NODE_ENV === 'production' && !corsOrigins?.length) {
    throw new Error(
      'CORS_ORIGINS environment variable is required in production',
    );
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors(
    corsOrigins?.length
      ? {
          origin: corsOrigins,
          credentials: true,
        }
      : undefined,
  );

  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  await app.listen(port);
}
bootstrap();
