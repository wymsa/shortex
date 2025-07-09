import 'dotenv/config';

import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get<ConfigService>(ConfigService);

	const PORT = configService.getOrThrow<number>('app.port');

	await app.listen(PORT);
}

bootstrap();
