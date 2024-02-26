import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IEstacionamentoService } from './estacionamento.interface.service';
import { Estacionamento } from '../domain/estacionamento.entity';
import { IEstacionamentoRepository } from '../domain/estacionamento.interface.repository';

@Injectable()
export class EstacionamentoService implements IEstacionamentoService {
	constructor(@Inject(IEstacionamentoRepository) private estacionamentoRepository: IEstacionamentoRepository) {}

	public async inserir(estacionamento: Estacionamento): Promise<Estacionamento> {
		return await this.estacionamentoRepository.inserir(estacionamento);
	}

	public async listar(): Promise<Estacionamento[]> {
		return await this.estacionamentoRepository.listar();
	}

	public async atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<void> {
		if (!(await this.estacionamentoRepository.atualizar(id, estacionamento))) {
			throw new NotFoundException('Estacionamento não encontrado');
		}
	}

	public async obter(id: string): Promise<Estacionamento> {
		const estacionamento = await this.estacionamentoRepository.obter(id);

		if (!estacionamento) {
			throw new NotFoundException('Estacionamento não encontrado');
		}

		return estacionamento;
	}

	public async excluir(id: string): Promise<void> {
		if (!(await this.estacionamentoRepository.excluir(id))) {
			throw new NotFoundException('Estacionamento não encontrado');
		}
	}
}
