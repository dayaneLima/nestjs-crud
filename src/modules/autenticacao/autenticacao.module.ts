import { Module } from '@nestjs/common';
import { AutenticacaoController } from './api/autenticacao.controller';
import { AutenticacaoServiceProvider } from './providers/autenticacao.provider';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
	imports: [UsuarioModule],
	controllers: [AutenticacaoController],
	providers: [AutenticacaoServiceProvider]
})
export class AutenticacaoModule {}
