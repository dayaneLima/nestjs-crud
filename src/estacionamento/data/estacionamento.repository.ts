import { Injectable } from '@nestjs/common';
import { Estacionamento } from '../domain/estacionamento.entity';
import { IEstacionamentoRepository } from '../domain/estacionamento.interface.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstacionamentoRepository implements IEstacionamentoRepository {
	constructor(@InjectRepository(Estacionamento) private readonly estacionamentoTypeOrmRepository: Repository<Estacionamento>) {}

	public async inserir(estacionamento: Estacionamento): Promise<Estacionamento> {
		return await this.estacionamentoTypeOrmRepository.save(estacionamento);
	}

	public async listar(): Promise<Estacionamento[]> {
		return await this.estacionamentoTypeOrmRepository.find();
	}

	public async atualizar(estacionamento: Estacionamento): Promise<Estacionamento> {
		return await this.estacionamentoTypeOrmRepository.save(estacionamento);
	}

	public async obter(id: string): Promise<Estacionamento> {
		return await this.estacionamentoTypeOrmRepository.findOne({
			where: { id: id }
		});
	}

	public async excluir(id: string): Promise<boolean> {
		return (await this.estacionamentoTypeOrmRepository.delete(id)).affected > 0;
	}
}
