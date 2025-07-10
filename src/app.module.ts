import { AppConfigModule } from '@/config/config.module';
import { ShortenerModule } from '@/modules/shortener/shortener.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [AppConfigModule, ShortenerModule]
})
export class AppModule {}
