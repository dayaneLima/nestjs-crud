import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";
import { HttpExceptionFilter } from "./usuario/filters/http-exception.filter";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true
		})
	);

	app.useGlobalFilters(new HttpExceptionFilter());
	useContainer(app.select(AppModule), { fallbackOnErrors: true });
	await app.listen(8080);
}
bootstrap();
