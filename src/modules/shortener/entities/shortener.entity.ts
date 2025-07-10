import { v4 as uuidv4 } from 'uuid';

export class Shortener {
	id: string;
	token: string;
	originalUrl: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(partial: Partial<Shortener>) {
		Object.assign(this, partial);
	}

	tokenize() {
		this.token = uuidv4();
	}
}
