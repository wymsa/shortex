import { IShortenerRepository } from '@/core/interfaces/repository.interface';
import { ShortenerEntity } from '@/modules/shortener/entities/shortener.database.entity';
import { Shortener } from '@/modules/shortener/entities/shortener.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShortenerRepository implements IShortenerRepository {
	constructor(
		@InjectRepository(ShortenerEntity)
		private readonly shortenerRepository: Repository<ShortenerEntity>
	) {}

	async create(payload: Shortener): Promise<Shortener> {
		const createdEntity = this.shortenerRepository.create({
			token: payload.token,
			originalUrl: payload.originalUrl
		});

		const { id, token, originalUrl, createdAt, updatedAt } =
			await this.shortenerRepository.save(createdEntity);

		return new Shortener({ id, token, originalUrl, createdAt, updatedAt });
	}
	async update(entityId: string, payload: Partial<Shortener>): Promise<Shortener | null> {
		const foundEntity = await this.shortenerRepository.findOneBy({ id: entityId });

		if (!foundEntity) return null;

		const updatedEntity = { ...foundEntity, ...payload };
		const { id, token, originalUrl, createdAt, updatedAt } =
			await this.shortenerRepository.save(updatedEntity);

		return new Shortener({ id, token, originalUrl, createdAt, updatedAt });
	}
	async delete(entityId: string): Promise<Shortener | null> {
		const foundEntity = await this.shortenerRepository.findOneBy({ id: entityId });

		if (!foundEntity) return null;

		const { id, originalUrl, token, createdAt, updatedAt } =
			await this.shortenerRepository.remove(foundEntity);
		return new Shortener({ id, originalUrl, token, createdAt, updatedAt });
	}
	async findAll(): Promise<Shortener[]> {
		const foundEntities = await this.shortenerRepository.find();

		return foundEntities.map((foundEntity) => {
			const { id, token, originalUrl, createdAt, updatedAt } = foundEntity;

			return new Shortener({ id, token, originalUrl, createdAt, updatedAt });
		});
	}
	async findOneByToken(payload: string): Promise<Shortener | null> {
		const foundEntity = await this.shortenerRepository.findOneBy({ token: payload });

		if (!foundEntity) return null;
		const { id, token, originalUrl, createdAt, updatedAt } = foundEntity;

		return new Shortener({ id, token, originalUrl, createdAt, updatedAt });
	}
	async findOneById(entityId: string): Promise<Shortener | null> {
		const foundEntity = await this.shortenerRepository.findOneBy({ id: entityId });

		if (!foundEntity) return null;
		const { id, token, originalUrl, createdAt, updatedAt } = foundEntity;

		return new Shortener({ id, token, originalUrl, createdAt, updatedAt });
	}
}
