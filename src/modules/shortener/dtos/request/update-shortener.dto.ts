import { IsOptional, IsUrl } from 'class-validator';

export class UpdateShortenerDto {
	@IsUrl()
	@IsOptional()
	originalUrl: string;
}
