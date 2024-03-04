import { AtualizarProdutoDTO } from '../dto/atualizar-produto.dto';
import { CriarProdutoDTO } from '../dto/criar-produto.dto';
import { ListarProdutoDTO } from '../dto/listar-produto.dto';

export interface IProdutoService {
	inserir(produtoDTO: CriarProdutoDTO): Promise<ListarProdutoDTO>;
	listar(): Promise<ListarProdutoDTO[]>;
	atualizar(id: string, produtoDTO: AtualizarProdutoDTO): Promise<ListarProdutoDTO>;
	obter(id: string): Promise<ListarProdutoDTO>;
	excluir(id: string): Promise<void>;
}

export const IProdutoService = Symbol('IProdutoService');
