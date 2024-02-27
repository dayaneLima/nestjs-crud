import { Estacionamento } from './estacionamento.entity';

export interface IEstacionamentoRepository {
	inserir(estacionamento: Estacionamento): Promise<Estacionamento>;
	listar(): Promise<Estacionamento[]>;
	atualizar(estacionamento: Estacionamento): Promise<Estacionamento>;
	obter(id: string): Promise<Estacionamento>;
	excluir(id: string): Promise<boolean>;
}

export const IEstacionamentoRepository = Symbol('IEstacionamentoRepository');
