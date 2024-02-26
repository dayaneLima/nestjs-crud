import { EstacionamentoRetornoDTO } from '../api/dto/estacionamento-retorno.dto';
import { Estacionamento } from './../domain/estacionamento.entity';

export interface IEstacionamentoService {
	inserir(Estacionamento: Estacionamento): Promise<Estacionamento>;
	listar(): Promise<EstacionamentoRetornoDTO[]>;
	atualizar(id: string, estacionamento: Partial<Estacionamento>): Promise<Estacionamento>;
	obter(id: string): Promise<Estacionamento>;
	excluir(id: string): Promise<void>;
}

export const IEstacionamentoService = Symbol('IEstacionamentoService');
