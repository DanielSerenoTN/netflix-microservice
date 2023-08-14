import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      skipUndefinedProperties: false,
      skipNullProperties: false,
      skipMissingProperties: false,
      disableErrorMessages: false,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      always: true,
    }),
  );

  //swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Netflix Microservice Documentation')
    .setDescription('Netflix API description')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(20060);
}
bootstrap();
