import { Inject, Injectable } from '@nestjs/common';
import { Usuario } from '../domain/usuario.model';
import { IUsuarioRepository } from '../domain/iusuario.repository';
import { IUsuarioService } from './iusuario.service';

@Injectable()
export class UsuarioService implements IUsuarioService {
  constructor(
    @Inject(IUsuarioRepository) private usuarioRepository: IUsuarioRepository,
  ) {}

  public async inserir(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.inserir(usuario);
  }

  public async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.listar();
  }
}
