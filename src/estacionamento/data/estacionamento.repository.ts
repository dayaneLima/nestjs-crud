import { Injectable } from '@nestjs/common';
import { Estacionamento } from '../domain/estacionamento.entity';
import { IEstacionamentoRepository } from '../domain/estacionamento.interface.repository';

@Injectable()
export class EstacionamentoRepository implements IEstacionamentoRepository {
	private estacionamentos: Estacionamento[] = [];

	public async inserir(estacionamento: Estacionamento): Promise<Estacionamento> {
		this.estacionamentos.push(estacionamento);
		return estacionamento;
	}

	public async listar(): Promise<Estacionamento[]> {
		return this.estacionamentos;
	}

	public async atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<Estacionamento> {
		const dadosNaoAtualizaveis = ['id', 'usuarioId'];
		const estacionamentoAtualizacao = await this.obter(id);

		Object.entries(estacionamento).forEach(([chave, valor]) => {
			if (dadosNaoAtualizaveis.includes(chave)) return;
			estacionamentoAtualizacao[chave] = valor;
		});

		return estacionamentoAtualizacao;
	}

	public async obter(id: string): Promise<Estacionamento> {
		return this.estacionamentos.find((u: Estacionamento) => u.id === id);
	}

	public async excluir(id: string): Promise<void> {
		this.estacionamentos = this.estacionamentos.filter((u: Estacionamento) => u.id !== id);
	}
}
