import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IProdutoService } from './produto.interface.service';
import { Produto } from '../domain/produto.entity';
import { IProdutoRepository } from '../domain/produto.interface.repository';
import { ProdutoRetornoDTO } from '../dto/produto-retorno.dto';
import { ProdutoInsercaoDTO } from '../dto/produto-insercao.dto';
import { ProdutoAtualizacaoDTO } from '../dto/produto-atualizacao.dto';

@Injectable()
export class ProdutoService implements IProdutoService {
	constructor(@Inject(IProdutoRepository) private produtoRepository: IProdutoRepository) {}

	public async inserir(produtoDTO: ProdutoInsercaoDTO): Promise<ProdutoRetornoDTO> {
		const produto = new Produto();
		produto.nome = produtoDTO.nome;
		produto.valor = produtoDTO.valor;
		produto.quantidadeDisponivel = produtoDTO.quantidadeDisponivel;
		produto.descricao = produtoDTO.descricao;
		produto.categoria = produtoDTO.categoria;
		produto.caracteristicas = produtoDTO.caracteristicas;
		produto.imagens = produtoDTO.imagens;

		const produtoInserido = await this.produtoRepository.inserir(produto);
		return this.converterProdutoParaProdutoRetornoDTO(produtoInserido);
	}

	public async listar(): Promise<ProdutoRetornoDTO[]> {
		const produtos = await this.produtoRepository.listar();
		return produtos.map((produto) => this.converterProdutoParaProdutoRetornoDTO(produto));
	}

	public async atualizar(id: string, produtoDTO: ProdutoAtualizacaoDTO): Promise<ProdutoRetornoDTO> {
		const produto = await this.produtoRepository.obter(id);

		if (!produto) {
			throw new NotFoundException('Produto não encontrado');
		}

		Object.assign(produto, produtoDTO);
		await this.produtoRepository.atualizar(produto);
		return this.converterProdutoParaProdutoRetornoDTO(produto);
	}

	public async obter(id: string): Promise<ProdutoRetornoDTO> {
		const produto = await this.produtoRepository.obter(id);

		if (!produto) {
			throw new NotFoundException('Produto não encontrado');
		}

		return this.converterProdutoParaProdutoRetornoDTO(produto);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.produtoRepository.excluir(id))) {
			throw new NotFoundException('Produto não encontrado');
		}
	}

	private converterProdutoParaProdutoRetornoDTO(produto: Produto): ProdutoRetornoDTO {
		return new ProdutoRetornoDTO(produto.id, produto.nome, produto.caracteristicas, produto.imagens);
	}
}
