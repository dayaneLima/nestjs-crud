import { Usuario } from "./usuario.entity";

export interface IUsuarioRepository {
	inserir(usuario: Usuario): Promise<Usuario>;
	listar(): Promise<Usuario[]>;
	verificarExiste(email: string): Promise<boolean>;
}

export const IUsuarioRepository = Symbol("IUsuarioRepository");
