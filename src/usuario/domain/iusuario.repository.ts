import { Usuario } from './usuario.model';

export interface IUsuarioRepository {
  inserir(usuario: Usuario): Promise<Usuario>;
  listar(): Promise<Usuario[]>;
}

export const IUsuarioRepository = Symbol('IUsuarioRepository');
