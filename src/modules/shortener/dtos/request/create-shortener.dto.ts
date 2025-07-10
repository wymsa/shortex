import { IsUrl } from 'class-validator';

export class CreateShortenerDto {
	@IsUrl()
	originalUrl: string;
}
