import { EstacionamentoAtualizacaoDTO } from '../dto/estacionamento-atualizacao.dto';
import { EstacionamentoRetornoDTO } from '../dto/estacionamento-retorno.dto';
import { EstacionamentoInsercaoDTO } from '../dto/estacionamento-insercao.dto';

export interface IEstacionamentoService {
	inserir(estacionamentoDTO: EstacionamentoInsercaoDTO): Promise<EstacionamentoRetornoDTO>;
	listar(): Promise<EstacionamentoRetornoDTO[]>;
	atualizar(id: string, estacionamentoDTO: EstacionamentoAtualizacaoDTO): Promise<EstacionamentoRetornoDTO>;
	obter(id: string): Promise<EstacionamentoRetornoDTO>;
	excluir(id: string): Promise<void>;
}

export const IEstacionamentoService = Symbol('IEstacionamentoService');
