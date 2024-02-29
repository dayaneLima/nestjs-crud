import { Controller, Inject, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IEstacionamentoService } from '../services/estacionamento.interface.service';
import { EstacionamentoRetornoDTO } from '../dto/estacionamento-retorno.dto';
import { EstacionamentoInsercaoDTO } from '../dto/estacionamento-insercao.dto';
import { EstacionamentoAtualizacaoDTO } from '../dto/estacionamento-atualizacao.dto';

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
	async inserir(@Body() estacionamentoDTO: EstacionamentoInsercaoDTO): Promise<EstacionamentoRetornoDTO> {
		return await this.estacionamentoService.inserir(estacionamentoDTO);
	}

	@Put('/:id')
	async atualizar(@Param('id') id: string, @Body() estacionamentoDTO: EstacionamentoAtualizacaoDTO): Promise<EstacionamentoRetornoDTO> {
		return await this.estacionamentoService.atualizar(id, estacionamentoDTO);
	}

	@Delete('/:id')
	async excluir(@Param('id') id: string): Promise<void> {
		await this.estacionamentoService.excluir(id);
	}
}
