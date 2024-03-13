import { CallHandler, ConsoleLogger, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';
import { RequestUsuario } from 'src/modules/autenticacao/valueObjects/request-usuario';

@Injectable()
export class LoggerGlobalInterceptor implements NestInterceptor {
	constructor(private logger: ConsoleLogger) {}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const contextHttp = context.switchToHttp();
		const request = contextHttp.getRequest<Request | RequestUsuario>();

		const response = contextHttp.getResponse<Response>();

		const { path, method } = request;
		const { statusCode } = response;
		this.logger.log(`${method} ${path}`);

		const instantePreController = Date.now();

		return next.handle().pipe(
			tap(() => {
				if ('usuario' in request) {
					this.logger.log(`Rota acessada pelo usuário ${request.usuario.sub}`);
				}
				const tempoExecucaoDaRota = Date.now() - instantePreController;
				this.logger.log(`Resposta: status ${statusCode} - ${tempoExecucaoDaRota}ms `);
			})
		);
	}
}
