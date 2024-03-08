import { Module } from '@nestjs/common';
import { AutenticacaoController } from './api/autenticacao.controller';
import { AutenticacaoServiceProvider } from './providers/autenticacao.provider';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [UsuarioModule, JwtModule.register({ global: true, secret: '', signOptions: { expiresIn: '72h' } })],
	controllers: [AutenticacaoController],
	providers: [AutenticacaoServiceProvider]
})
export class AutenticacaoModule {}
