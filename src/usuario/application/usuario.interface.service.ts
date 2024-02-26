import { ListagemUsuarioDTO } from '../api/dto/listagem-usuario.dto';
import { Usuario } from '../domain/usuario.entity';

export interface IUsuarioService {
	inserir(usuario: Usuario): Promise<Usuario>;
	listar(): Promise<ListagemUsuarioDTO[]>;
	verificarUsuarioExiste(email: string): Promise<boolean>;
	atualizar(id: string, usuario: Partial<Usuario>): Promise<Usuario>;
	obter(id: string): Promise<Usuario>;
	excluir(id: string): Promise<void>;
}

export const IUsuarioService = Symbol('IUsuarioService');
