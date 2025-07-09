import path from 'node:path';
import { DataSource } from 'typeorm';

const rootDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

export default new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: [path.join(rootDir, '**', '*.entity.{ts,js}')],
	migrations: [path.join(rootDir, 'config', 'migrations', '*.{ts,js}')]
});
