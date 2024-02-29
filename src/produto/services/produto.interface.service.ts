import { ProdutoAtualizacaoDTO } from '../dto/produto-atualizacao.dto';
import { ProdutoInsercaoDTO } from '../dto/produto-insercao.dto';
import { ProdutoRetornoDTO } from '../dto/produto-retorno.dto';

export interface IProdutoService {
	inserir(produtoDTO: ProdutoInsercaoDTO): Promise<ProdutoRetornoDTO>;
	listar(): Promise<ProdutoRetornoDTO[]>;
	atualizar(id: string, produtoDTO: ProdutoAtualizacaoDTO): Promise<ProdutoRetornoDTO>;
	obter(id: string): Promise<ProdutoRetornoDTO>;
	excluir(id: string): Promise<void>;
}

export const IProdutoService = Symbol('IProdutoService');
