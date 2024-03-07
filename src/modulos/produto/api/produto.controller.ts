import { Controller, Inject, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { IProdutoService } from '../services/produto.interface.service';
import { ListarProdutoDTO } from '../dto/listar-produto.dto';
import { CriarProdutoDTO } from '../dto/criar-produto.dto';
import { AtualizarProdutoDTO } from '../dto/atualizar-produto.dto';

@Controller('/produtos')
export class ProdutoController {
	constructor(@Inject(IProdutoService) private readonly produtoService: IProdutoService) {}

	@Get()
	async listar(): Promise<ListarProdutoDTO[]> {
		return await this.produtoService.listar();
	}

	@Get('/:id')
	@UseInterceptors(CacheInterceptor)
	async obter(@Param('id') id: string): Promise<ListarProdutoDTO> {
		return await this.produtoService.obter(id);
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
