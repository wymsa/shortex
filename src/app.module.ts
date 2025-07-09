import { AppConfigModule } from '@/config/config.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [AppConfigModule]
})
export class AppModule {}
