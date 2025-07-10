import 'dotenv/config';

import path from 'node:path';
import { DataSource } from 'typeorm';

export default new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: [path.join(__dirname, '../../**/*.database.entity.{ts,js}')],
	migrations: [path.join(__dirname, 'migrations', '*.{ts,js}')]
});
