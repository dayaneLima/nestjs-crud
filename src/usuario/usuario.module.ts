import { Module } from "@nestjs/common";
import { UsuarioController } from "./api/usuario.controller";
import { UsuarioRepositoryProvider, UsuarioServiceProvider } from "./provider/usuario.provider";
import { EmailEhUnicoValidator } from "./api/validacao/email-eh-unico.validator";

@Module({
	controllers: [UsuarioController],
	providers: [UsuarioServiceProvider, UsuarioRepositoryProvider, EmailEhUnicoValidator]
})
export class UsuarioModule {}
