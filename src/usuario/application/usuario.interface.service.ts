import { Usuario } from "../domain/usuario.entity";

export interface IUsuarioService {
	inserir(usuario: Usuario): Promise<Usuario>;
	listar(): Promise<Usuario[]>;
	verificarUsuarioExiste(email: string): Promise<boolean>;
}

export const IUsuarioService = Symbol("IUsuarioService");
