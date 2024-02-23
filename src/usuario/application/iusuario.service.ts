import { Usuario } from '../domain/usuario.model';

export interface IUsuarioService {
  inserir(usuario: Usuario): Promise<Usuario>;
  listar(): Promise<Usuario[]>;
}

export const IUsuarioService = Symbol('IUsuarioService');
