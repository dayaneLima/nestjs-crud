import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IEstacionamentoService } from './estacionamento.interface.service';
import { Estacionamento } from '../domain/estacionamento.entity';
import { IEstacionamentoRepository } from '../domain/estacionamento.interface.repository';
import { EstacionamentoRetornoDTO } from '../dto/estacionamento-retorno.dto';
import { EstacionamentoInsercaoDTO } from '../dto/estacionamento-insercao.dto';
import { EstacionamentoAtualizacaoDTO } from '../dto/estacionamento-atualizacao.dto';

@Injectable()
export class EstacionamentoService implements IEstacionamentoService {
	constructor(@Inject(IEstacionamentoRepository) private estacionamentoRepository: IEstacionamentoRepository) {}

	public async inserir(estacionamentoDTO: EstacionamentoInsercaoDTO): Promise<EstacionamentoRetornoDTO> {
		const estacionamento = new Estacionamento();
		estacionamento.nome = estacionamentoDTO.nome;
		estacionamento.imagens = estacionamentoDTO.imagens;

		const estacionamentoInserido = await this.estacionamentoRepository.inserir(estacionamento);
		return this.converterEstacionamentoParaEstacionamentoRetornoDTO(estacionamentoInserido);
	}

	public async listar(): Promise<EstacionamentoRetornoDTO[]> {
		const estacionamentos = await this.estacionamentoRepository.listar();
		return estacionamentos.map((estacionamento) => this.converterEstacionamentoParaEstacionamentoRetornoDTO(estacionamento));
	}

	public async atualizar(id: string, estacionamentoDTO: EstacionamentoAtualizacaoDTO): Promise<EstacionamentoRetornoDTO> {
		const estacionamento = await this.estacionamentoRepository.obter(id);

		if (!estacionamento) {
			throw new NotFoundException('Estacionamento não encontrado');
		}

		Object.assign(estacionamento, estacionamentoDTO);
		await this.estacionamentoRepository.atualizar(estacionamento);
		return this.converterEstacionamentoParaEstacionamentoRetornoDTO(estacionamento);
	}

	public async obter(id: string): Promise<EstacionamentoRetornoDTO> {
		const estacionamento = await this.estacionamentoRepository.obter(id);

		if (!estacionamento) {
			throw new NotFoundException('Estacionamento não encontrado');
		}

		return this.converterEstacionamentoParaEstacionamentoRetornoDTO(estacionamento);
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.estacionamentoRepository.excluir(id))) {
			throw new NotFoundException('Estacionamento não encontrado');
		}
	}

	private converterEstacionamentoParaEstacionamentoRetornoDTO(estacionamento: Estacionamento): EstacionamentoRetornoDTO {
		return new EstacionamentoRetornoDTO(estacionamento.id, estacionamento.nome);
	}
}
