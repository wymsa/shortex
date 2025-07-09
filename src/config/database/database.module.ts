import datasourceConfig from '@/config/database/datasource.config';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				const datasource = datasourceConfig.options;

				return {
					...datasource,
					url: configService.getOrThrow<string>('database.url'),
					autoLoadEntities: true,
					logging: true,
					synchronize: false,
					retryAttempts: 5,
					retryDelay: 3000
				};
			}
		})
	]
})
export class DatabaseModule {}
