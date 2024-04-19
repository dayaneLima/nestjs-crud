import { AtualizarUsuarioDTO } from '../dtos/atualizar-usuario.dto';
import { CriarUsuarioDTO } from '../dtos/criar-usuario.dto';
import { ListarUsuarioDTO } from '../dtos/listar-usuario.dto';

export interface IUsuarioService {
	inserir(usuarioDTO: CriarUsuarioDTO): Promise<ListarUsuarioDTO>;
	listar(): Promise<ListarUsuarioDTO[]>;
	verificarUsuarioExiste(email: string, id?: string): Promise<boolean>;
	atualizar(id: string, usuarioDTO: AtualizarUsuarioDTO): Promise<ListarUsuarioDTO>;
	obter(id: string): Promise<ListarUsuarioDTO>;
	excluir(id: string): Promise<void>;
}

export const IUsuarioService = Symbol('IUsuarioService');
