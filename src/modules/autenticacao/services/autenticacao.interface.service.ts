export interface IAutenticacaoService {
	autenticar(email: string, senha: string);
}

export const IAutenticacaoService = Symbol('IAutenticacaoService');
