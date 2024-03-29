import { Produto } from './produto.entity';

export interface IProdutoRepository {
	inserir(produto: Produto): Promise<Produto>;
	listar(): Promise<Produto[]>;
	obterPorIds(ids: string[]): Promise<Produto[]>;
	atualizar(produto: Produto): Promise<Produto>;
	obter(id: string): Promise<Produto | null>;
	excluir(id: string): Promise<boolean>;
}

export const IProdutoRepository = Symbol('IProdutoRepository');
