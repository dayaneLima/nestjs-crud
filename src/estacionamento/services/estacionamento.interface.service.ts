import { AtualizacaoEstacionamentoDTO } from '../api/dto/atualizacao-estacionamento.dto';
import { EstacionamentoRetornoDTO } from '../api/dto/estacionamento-retorno.dto';
import { InsercaoEstacionamentoDTO } from '../api/dto/insercao-estacionamento.dto';

export interface IEstacionamentoService {
	inserir(estacionamentoDTO: InsercaoEstacionamentoDTO): Promise<EstacionamentoRetornoDTO>;
	listar(): Promise<EstacionamentoRetornoDTO[]>;
	atualizar(id: string, estacionamentoDTO: AtualizacaoEstacionamentoDTO): Promise<EstacionamentoRetornoDTO>;
	obter(id: string): Promise<EstacionamentoRetornoDTO>;
	excluir(id: string): Promise<void>;
}

export const IEstacionamentoService = Symbol('IEstacionamentoService');
