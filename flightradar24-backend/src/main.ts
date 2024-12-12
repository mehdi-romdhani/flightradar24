import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import * as YAML from 'yamljs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = YAML.load(join(__dirname, '../src/Flightradar24-API.yaml'));

  SwaggerModule.setup('api', app, document);
  // eslint-disable-next-line prettier/prettier
  
  app.enableCors(); // Active CORS
  // eslint-disable-next-line prettier/prettier
  await app.listen(3000);
  

  console.log('Application is running on: http://localhost:3000/api');
}
bootstrap();
