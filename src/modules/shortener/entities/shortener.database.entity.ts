import { BaseEntity } from '@/core/interfaces/database.interface';
import { Column, Entity } from 'typeorm';

@Entity()
export class ShortenerEntity extends BaseEntity {
	@Column({ type: 'varchar', unique: true })
	token: string;
	@Column({ type: 'text' })
	originalUrl: string;
}
