import appConfig from '@/config/app.config';
import databaseConfig from '@/config/database/database.config';
import { DatabaseModule } from '@/config/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			cache: true,
			isGlobal: true,
			load: [appConfig, databaseConfig]
		}),
		DatabaseModule
	]
})
export class AppConfigModule {}
