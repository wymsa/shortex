import { Expose } from 'class-transformer';

export class DefaultResponseShortenerDto {
	@Expose()
	id: string;
	@Expose()
	token: string;
	@Expose()
	originalUrl: string;
}

export class WithTimestampResponseShortenerDto extends DefaultResponseShortenerDto {
	@Expose()
	createdAt: Date;
	@Expose()
	updatedAt: Date;
}
