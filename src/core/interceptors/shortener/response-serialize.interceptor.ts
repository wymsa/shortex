import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ClassConstructor, plainToClass } from 'class-transformer';

export class ShortenerResponseSerializeInterceptor<T> implements NestInterceptor {
	constructor(private readonly dto: ClassConstructor<T>) {}

	intercept(context: ExecutionContext, next: CallHandler) {
		return next.handle().pipe(
			map((data: T) => {
				return plainToClass(this.dto, data, {
					excludeExtraneousValues: true
				});
			})
		);
	}
}
