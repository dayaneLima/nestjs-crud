import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
	constructor(private adapterHost: HttpAdapterHost) {}

	catch(exception: unknown, host: ArgumentsHost) {
		const { httpAdapter } = this.adapterHost;
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		const request = ctx.getRequest();
		const body =
			exception instanceof HttpException
				? {
						statusCode: exception.getStatus(),
						timestamp: new Date().toISOString(),
						path: httpAdapter.getRequestUrl(request),
						error: exception.getResponse()['error'] || '',
						message: exception.getResponse()['message'] || exception.message || 'Internal Server Error'
					}
				: {
						statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
						timestamp: new Date().toISOString(),
						path: httpAdapter.getRequestUrl(request),
						error: 'Internal Server Error',
						message: 'Internal Server Error'
					};

		httpAdapter.reply(response, body, body.statusCode);
	}
}
