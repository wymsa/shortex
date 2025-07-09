import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
	port: Number(process.env.APP_PORT),
	environment: process.env.NODE_ENV
}));
