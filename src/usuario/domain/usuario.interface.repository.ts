import { Usuario } from './usuario.entity';

export interface IUsuarioRepository {
	inserir(usuario: Usuario): Promise<Usuario>;
	listar(): Promise<Usuario[]>;
	verificarExiste(email: string, id?: string): Promise<boolean>;
	atualizar(usuario: Usuario): Promise<Usuario>;
	obter(id: string): Promise<Usuario>;
	excluir(id: string): Promise<boolean>;
}

export const IUsuarioRepository = Symbol('IUsuarioRepository');
