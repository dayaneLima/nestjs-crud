import { Estacionamento } from './estacionamento.entity';

export interface IEstacionamentoRepository {
	inserir(estacionamento: Estacionamento): Promise<Estacionamento>;
	listar(): Promise<Estacionamento[]>;
	atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<Estacionamento>;
	obter(id: string): Promise<Estacionamento>;
	excluir(id: string): Promise<void>;
}

export const IEstacionamentoRepository = Symbol('IEstacionamentoRepository');
