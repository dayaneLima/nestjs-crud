import { Estacionamento } from './../domain/estacionamento.entity';

export interface IEstacionamentoService {
	inserir(Estacionamento: Estacionamento): Promise<Estacionamento>;
	listar(): Promise<Estacionamento[]>;
	atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<Estacionamento>;
	obter(id: string): Promise<Estacionamento>;
	excluir(id: string): Promise<void>;
}

export const IEstacionamentoService = Symbol('IEstacionamentoService');
