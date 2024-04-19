import { AtualizarProdutoDTO } from '../dtos/atualizar-produto.dto';
import { CriarProdutoDTO } from '../dtos/criar-produto.dto';
import { ListarProdutoDTO } from '../dtos/listar-produto.dto';

export interface IProdutoService {
	inserir(produtoDTO: CriarProdutoDTO): Promise<ListarProdutoDTO>;
	listar(): Promise<ListarProdutoDTO[]>;
	atualizar(id: string, produtoDTO: AtualizarProdutoDTO): Promise<ListarProdutoDTO>;
	obter(id: string): Promise<ListarProdutoDTO>;
	excluir(id: string): Promise<void>;
}

export const IProdutoService = Symbol('IProdutoService');
