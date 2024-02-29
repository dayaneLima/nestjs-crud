import { Controller, Inject, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IProdutoService } from '../services/produto.interface.service';
import { ProdutoRetornoDTO } from '../dto/produto-retorno.dto';
import { ProdutoInsercaoDTO } from '../dto/produto-insercao.dto';
import { ProdutoAtualizacaoDTO } from '../dto/produto-atualizacao.dto';

@Controller('/produtos')
export class ProdutoController {
	constructor(@Inject(IProdutoService) private readonly produtoService: IProdutoService) {}

	@Get()
	async listar(): Promise<ProdutoRetornoDTO[]> {
		return await this.produtoService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<ProdutoRetornoDTO> {
		return await this.produtoService.obter(id);
	}

	@Post()
	async inserir(@Body() produtoDTO: ProdutoInsercaoDTO): Promise<ProdutoRetornoDTO> {
		return await this.produtoService.inserir(produtoDTO);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() produtoDTO: ProdutoAtualizacaoDTO): Promise<ProdutoRetornoDTO> {
		return await this.produtoService.atualizar(id, produtoDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.produtoService.excluir(id);
	}
}
