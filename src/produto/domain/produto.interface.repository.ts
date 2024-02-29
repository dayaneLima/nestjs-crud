import { Produto } from './produto.entity';

export interface IProdutoRepository {
	inserir(produto: Produto): Promise<Produto>;
	listar(): Promise<Produto[]>;
	atualizar(produto: Produto): Promise<Produto>;
	obter(id: string): Promise<Produto>;
	excluir(id: string): Promise<boolean>;
}

export const IProdutoRepository = Symbol('IProdutoRepository');
