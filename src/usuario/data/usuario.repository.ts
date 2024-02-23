import { Injectable } from '@nestjs/common';
import { Usuario } from '../domain/usuario.model';
import { IUsuarioRepository } from '../domain/iusuario.repository';

@Injectable()
export class UsuarioRepository implements IUsuarioRepository {
  private usuarios: Usuario[] = [];

  public async inserir(usuario: Usuario): Promise<Usuario> {
    this.usuarios.push(usuario);
    return usuario;
  }

  public async listar(): Promise<Usuario[]> {
    return this.usuarios;
  }
}
