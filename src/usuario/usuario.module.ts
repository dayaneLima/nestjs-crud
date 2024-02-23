import { Module } from '@nestjs/common';
import { UsuarioController } from './api/usuario.controller';
import {
  UsuarioRepositoryProvider,
  UsuarioServiceProvider,
} from './provider/usuario.provider';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioServiceProvider, UsuarioRepositoryProvider],
})
export class UsuarioModule {}
