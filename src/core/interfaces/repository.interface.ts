import { Shortener } from '@/modules/shortener/entities/shortener.entity';

export interface IShortenerRepository {
	create(payload: Shortener): Promise<Shortener>;
	update(entityId: string, payload: Partial<Shortener>): Promise<Shortener | null>;
	delete(entityId: string): Promise<Shortener | null>;
	findAll(): Promise<Shortener[]>;
	findOneByToken(token: string): Promise<Shortener | null>;
	findOneById(entityId: string): Promise<Shortener | null>;
}

export const SHORTENER_REPOSITORY = Symbol('ShortenerRepository');
