import { Body, Controller, Get, Inject } from '@nestjs/common';
import { Usuario } from '../domain/usuario.model';
import { IUsuarioService } from '../application/iusuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    @Inject(IUsuarioService) private readonly usuarioService: IUsuarioService
  ) {}

  @Get()
  async listar(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  async inserir(@Body() dadosUsuario: Usuario): Promise<Usuario> {
    return this.usuarioService.inserir(dadosUsuario);
  }
}
