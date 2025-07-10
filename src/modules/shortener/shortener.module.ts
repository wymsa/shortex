import { SHORTENER_REPOSITORY } from '@/core/interfaces/repository.interface';
import { ShortenerEntity } from '@/modules/shortener/entities/shortener.database.entity';
import { ShortenerRepository } from '@/modules/shortener/repositories/shortener.repository';
import { ShortenerController } from '@/modules/shortener/shortener.controller';
import { ShortenerService } from '@/modules/shortener/shortener.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([ShortenerEntity])],
	controllers: [ShortenerController],
	providers: [
		ShortenerService,
		{
			provide: SHORTENER_REPOSITORY,
			useClass: ShortenerRepository
		}
	]
})
export class ShortenerModule {}
