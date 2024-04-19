import { AcessTokenDTO } from '../dtos/access-token.dto';

export interface IAutenticacaoService {
	autenticar(email: string, senha: string): Promise<AcessTokenDTO>;
}

export const IAutenticacaoService = Symbol('IAutenticacaoService');
