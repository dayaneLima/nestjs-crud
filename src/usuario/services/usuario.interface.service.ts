import { UsuarioAtualizacaoDTO } from '../dto/usuario-atualizacao.dto';
import { UsuarioInsercaoDTO } from '../dto/usuario-insercao.dto';
import { UsuarioRetornoDTO } from '../dto/usuario-retorno.dto';

export interface IUsuarioService {
	inserir(usuarioDTO: UsuarioInsercaoDTO): Promise<UsuarioRetornoDTO>;
	listar(): Promise<UsuarioRetornoDTO[]>;
	verificarUsuarioExiste(email: string, id?: string): Promise<boolean>;
	atualizar(id: string, usuarioDTO: UsuarioAtualizacaoDTO): Promise<UsuarioRetornoDTO>;
	obter(id: string): Promise<UsuarioRetornoDTO>;
	excluir(id: string): Promise<void>;
}

export const IUsuarioService = Symbol('IUsuarioService');
