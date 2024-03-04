import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IProdutoService } from './produto.interface.service';
import { Produto } from '../domain/produto.entity';
import { IProdutoRepository } from '../domain/produto.interface.repository';
import { ListarProdutoDTO } from '../dto/listar-produto.dto';
import { CriarProdutoDTO } from '../dto/criar-produto.dto';
import { AtualizarProdutoDTO } from '../dto/atualizar-produto.dto';

@Injectable()
export class ProdutoService implements IProdutoService {
	constructor(@Inject(IProdutoRepository) private produtoRepository: IProdutoRepository) {}

	public async inserir(produtoDTO: CriarProdutoDTO): Promise<ListarProdutoDTO> {
		const produto = new Produto();
		produto.nome = produtoDTO.nome;
		produto.valor = produtoDTO.valor;
		produto.quantidadeDisponivel = produtoDTO.quantidadeDisponivel;
		produto.descricao = produtoDTO.descricao;
		produto.categoria = produtoDTO.categoria;
		produto.caracteristicas = produtoDTO.caracteristicas;
		produto.imagens = produtoDTO.imagens;

		const produtoInserido = await this.produtoRepository.inserir(produto);
		return this.converterProdutoParaListarProdutoDTO(produtoInserido);
	}

	public async listar(): Promise<ListarProdutoDTO[]> {
		const produtos = await this.produtoRepository.listar();
		return produtos.map((produto) => this.converterProdutoParaListarProdutoDTO(produto));
	}

	public async atualizar(id: string, produtoDTO: AtualizarProdutoDTO): Promise<ListarProdutoDTO> {
		const produto = await this.produtoRepository.obter(id);

		if (!produto) {
			throw new NotFoundException('Produto não encontrado');
		}

		Object.assign(produto, produtoDTO);
		await this.produtoRepository.atualizar(produto);
		return this.converterProdutoParaListarProdutoDTO(produto);
	}

	public async obter(id: string): Promise<ListarProdutoDTO> {
		const produto = await this.produtoRepository.obter(id);

		if (!produto) {
			throw new NotFoundException('Produto não encontrado');
		}

		return this.converterProdutoParaListarProdutoDTO(produto);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.produtoRepository.excluir(id))) {
			throw new NotFoundException('Produto não encontrado');
		}
	}

	private converterProdutoParaListarProdutoDTO(produto: Produto): ListarProdutoDTO {
		return new ListarProdutoDTO(produto.id, produto.nome, produto.caracteristicas, produto.imagens);
	}
}
