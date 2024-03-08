import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsuarioPayload } from '../valueObjects/usuario-payload';
import { RequestUsuario } from '../valueObjects/request-usuario';

@Injectable()
export class AutenticacaoGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<RequestUsuario>();
		const token = this.extrairTokenCabecalho(request);

		if (!token) {
			throw new UnauthorizedException('Erro de autenticação');
		}

		try {
			const payload: UsuarioPayload = await this.jwtService.verifyAsync(token);
			request.usuario = payload;
		} catch (error) {
			throw new UnauthorizedException('JWT inválido');
		}

		return true;
	}

	private extrairTokenCabecalho(request: Request): string | undefined {
		const [tipo, token] = request.headers.authorization?.split(' ') ?? [];
		return tipo === 'Bearer' ? token : undefined;
	}
}
