import { IShortenerRepository, SHORTENER_REPOSITORY } from '@/core/interfaces/repository.interface';
import { CreateShortenerDto } from '@/modules/shortener/dtos/request/create-shortener.dto';
import { UpdateShortenerDto } from '@/modules/shortener/dtos/request/update-shortener.dto';
import { Shortener } from '@/modules/shortener/entities/shortener.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ShortenerService {
	constructor(
		@Inject(SHORTENER_REPOSITORY) private readonly shortenerRepository: IShortenerRepository
	) {}

	async create(payload: CreateShortenerDto): Promise<Shortener> {
		const shortener = new Shortener({ originalUrl: payload.originalUrl });
		shortener.tokenize();

		return await this.shortenerRepository.create(shortener);
	}

	async update(shortenerId: string, payload: UpdateShortenerDto): Promise<Shortener> {
		const updatedShortener = await this.shortenerRepository.update(shortenerId, payload);

		if (!updatedShortener) throw new NotFoundException('Shortener not found');

		return updatedShortener;
	}

	async delete(shortenerId: string): Promise<Shortener> {
		const deletedShortener = await this.shortenerRepository.delete(shortenerId);

		if (!deletedShortener) throw new NotFoundException('Shortener not found');

		return deletedShortener;
	}

	async findAll(): Promise<Shortener[]> {
		return await this.shortenerRepository.findAll();
	}

	async findOneByToken(token: string): Promise<Shortener> {
		const foundShortener = await this.shortenerRepository.findOneByToken(token);

		if (!foundShortener) throw new NotFoundException('Shortener not found');

		return foundShortener;
	}

	async findOneById(shortenerId: string): Promise<Shortener> {
		const foundShortener = await this.shortenerRepository.findOneById(shortenerId);

		if (!foundShortener) throw new NotFoundException('Shortener not found');

		return foundShortener;
	}
}
