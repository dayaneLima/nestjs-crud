import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true
		})
	);

	const config = new DocumentBuilder()
		.setTitle('API de E-commerce')
		.setDescription('API de e-commerce feita em NestJs com TypeScript')
		.setVersion('1.0')
		.addBearerAuth(
			{
				bearerFormat: 'JWT',
				type: 'http',
				name: 'Authorization',
				description: 'Autenticação baseada em Json Web Token (JWT)',
				in: 'Header',
				scheme: 'bearer'
			}
		)
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document, {
		swaggerOptions: {
			tagsSorter: 'alpha',
			operationsSorter: 'alpha'
		}
	});

	useContainer(app.select(AppModule), { fallbackOnErrors: true });
	await app.listen(8080);
}
bootstrap();
