import { Controller, Inject, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IEstacionamentoService } from '../services/estacionamento.interface.service';
import { EstacionamentoRetornoDTO } from './dto/estacionamento-retorno.dto';
import { InsercaoEstacionamentoDTO } from './dto/insercao-estacionamento.dto';
import { AtualizacaoEstacionamentoDTO } from './dto/atualizacao-estacionamento.dto';

@Controller('/estacionamentos')
export class EstacionamentoController {
	constructor(@Inject(IEstacionamentoService) private readonly estacionamentoService: IEstacionamentoService) {}

	@Get()
	async listar(): Promise<EstacionamentoRetornoDTO[]> {
		return await this.estacionamentoService.listar();
	}

	@Get('/:id')
	async obter(@Param('id') id: string): Promise<EstacionamentoRetornoDTO> {
		return await this.estacionamentoService.obter(id);
	}

	@Post()
	async inserir(@Body() estacionamentoDTO: InsercaoEstacionamentoDTO): Promise<EstacionamentoRetornoDTO> {
		return await this.estacionamentoService.inserir(estacionamentoDTO);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() estacionamentoDTO: AtualizacaoEstacionamentoDTO): Promise<EstacionamentoRetornoDTO> {
		return await this.estacionamentoService.atualizar(id, estacionamentoDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.estacionamentoService.excluir(id);
	}
}
