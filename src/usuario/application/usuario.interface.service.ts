import { UsuarioRetornoDTO } from '../api/dto/usuario-retorno.dto';
import { Usuario } from '../domain/usuario.entity';

export interface IUsuarioService {
	inserir(usuario: Usuario): Promise<UsuarioRetornoDTO>;
	listar(): Promise<UsuarioRetornoDTO[]>;
	verificarUsuarioExiste(email: string, id?: string): Promise<boolean>;
	atualizar(id: string, usuario: Partial<Usuario>): Promise<UsuarioRetornoDTO>;
	obter(id: string): Promise<UsuarioRetornoDTO>;
	excluir(id: string): Promise<void>;
}

export const IUsuarioService = Symbol('IUsuarioService');
