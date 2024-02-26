import { Usuario } from './usuario.entity';

export interface IUsuarioRepository {
	inserir(usuario: Usuario): Promise<Usuario>;
	listar(): Promise<Usuario[]>;
	verificarExiste(email: string): Promise<boolean>;
	atualizar(id: string, usuario: Partial<Usuario>): Promise<Usuario>;
	obter(id: string): Promise<Usuario>;
	excluir(id: string): Promise<void>;
}

export const IUsuarioRepository = Symbol('IUsuarioRepository');
