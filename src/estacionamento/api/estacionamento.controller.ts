import { Controller, Inject, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IEstacionamentoService } from '../application/estacionamento.interface.service';
import { Estacionamento } from '../domain/estacionamento.entity';
import { ListagemEstacionamentoDTO } from './dto/listagem-estacionamento.dto';
import { InsercaoEstacionamentoDTO } from './dto/insercao-estacionamento.dto';
import { v4 as uuid } from 'uuid';
import { AtualizacaoProdutoDTO } from './dto/atualizacao-estacionamento.dto';

@Controller('/estacionamentos')
export class EstacionamentoController {
	constructor(@Inject(IEstacionamentoService) private readonly estacionamentoService: IEstacionamentoService) {}

	@Get()
	async listar(): Promise<ListagemEstacionamentoDTO[]> {
		const estacionamentos = await this.estacionamentoService.listar();
		return estacionamentos.map((estacionamento) => new ListagemEstacionamentoDTO(estacionamento.nome));
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<Estacionamento> {
		return await this.estacionamentoService.obter(id);
	}

	@Post()
	async inserir(@Body() estacionamentoDTO: InsercaoEstacionamentoDTO): Promise<Estacionamento> {
		const estacionamento = new Estacionamento();
		estacionamento.id = uuid();
		estacionamento.nome = estacionamentoDTO.nome;
		estacionamento.usuarioId = estacionamentoDTO.usuarioId;

		return await this.estacionamentoService.inserir(estacionamento);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() produtoDTO: AtualizacaoProdutoDTO): Promise<void> {
		await this.estacionamentoService.atualizar(id, produtoDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.estacionamentoService.excluir(id);
	}
}
