import { Controller, Inject, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { IProdutoService } from '../services/produto.interface.service';
import { ListarProdutoDTO } from '../dtos/listar-produto.dto';
import { CriarProdutoDTO } from '../dtos/criar-produto.dto';
import { AtualizarProdutoDTO } from '../dtos/atualizar-produto.dto';
import { Cache } from 'cache-manager';

@Controller('/produtos')
export class ProdutoController {
	constructor(
		@Inject(IProdutoService) private readonly produtoService: IProdutoService,
		@Inject(CACHE_MANAGER) private gerenciadorCache: Cache
	) {}

	@Get()
	@UseInterceptors(CacheInterceptor)
	async listar(): Promise<ListarProdutoDTO[]> {
		return await this.produtoService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<ListarProdutoDTO> {
		let produto = await this.gerenciadorCache.get<ListarProdutoDTO>(`produto-${id}`);

		if (!produto) {
			produto = await this.produtoService.obter(id);
			await this.gerenciadorCache.set(`produto-${id}`, produto);
		}

		return produto;
	}

	@Post()
	async inserir(@Body() produtoDTO: CriarProdutoDTO): Promise<ListarProdutoDTO> {
		return await this.produtoService.inserir(produtoDTO);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() produtoDTO: AtualizarProdutoDTO): Promise<ListarProdutoDTO> {
		return await this.produtoService.atualizar(id, produtoDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.produtoService.excluir(id);
	}
}
