import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Stripe Mastery')
    .setDescription('Apis')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('/api/v1', app, document);
  app.enableCors();
  await app.listen(5555);
}
bootstrap();
