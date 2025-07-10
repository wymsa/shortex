import { ShortenerResponseSerializeInterceptor } from '@/core/interceptors/shortener/response-serialize.interceptor';
import { CreateShortenerDto } from '@/modules/shortener/dtos/request/create-shortener.dto';
import { UpdateShortenerDto } from '@/modules/shortener/dtos/request/update-shortener.dto';
import { DefaultResponseShortenerDto } from '@/modules/shortener/dtos/response/response-shortener.dto';
import { ShortenerService } from '@/modules/shortener/shortener.service';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Res,
	UseInterceptors
} from '@nestjs/common';
import { Response } from 'express';

@UseInterceptors(
	new ShortenerResponseSerializeInterceptor<DefaultResponseShortenerDto>(
		DefaultResponseShortenerDto
	)
)
@Controller({ path: 'shortener' })
export class ShortenerController {
	constructor(private readonly shortenerService: ShortenerService) {}

	@Post()
	async create(@Body() payload: CreateShortenerDto) {
		const createdShortener = await this.shortenerService.create(payload);

		return createdShortener;
	}

	@Patch(':shortenerId')
	async update(@Param('shortenerId') shortenerId: string, @Body() payload: UpdateShortenerDto) {
		const updatedShortener = await this.shortenerService.update(shortenerId, payload);

		return updatedShortener;
	}

	@Delete(':shortenerId')
	@HttpCode(HttpStatus.NO_CONTENT)
	async delete(@Param('shortenerId') shortenerId: string) {
		const deletedShortener = await this.shortenerService.delete(shortenerId);

		return deletedShortener;
	}

	@Get()
	async findAll() {
		const shorteners = await this.shortenerService.findAll();

		return shorteners;
	}

	@Get(':token')
	async findOneByToken(@Param('token') token: string, @Res() response: Response) {
		const { originalUrl } = await this.shortenerService.findOneByToken(token);

		response.redirect(originalUrl);
	}

	@Get(':shortenerId')
	async findOneById(@Param('shortenerId') shortenerId: string) {
		const foundShortener = await this.shortenerService.findOneById(shortenerId);

		return foundShortener;
	}
}
