import { Estacionamento } from './estacionamento.entity';

export interface IEstacionamentoRepository {
	inserir(estacionamento: Estacionamento): Promise<Estacionamento>;
	listar(): Promise<Estacionamento[]>;
	atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<boolean>;
	obter(id: string): Promise<Estacionamento>;
	excluir(id: string): Promise<boolean>;
}

export const IEstacionamentoRepository = Symbol('IEstacionamentoRepository');
