import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioRepositoryProvider, UsuarioServiceProvider } from './providers/usuario.provider';
import { EmailEhUnicoValidator } from './validations/email-eh-unico.validator';
import { Usuario } from './domain/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Usuario])],
	controllers: [UsuarioController],
	providers: [UsuarioServiceProvider, UsuarioRepositoryProvider, EmailEhUnicoValidator],
	exports: [UsuarioRepositoryProvider]
})
export class UsuarioModule {}
