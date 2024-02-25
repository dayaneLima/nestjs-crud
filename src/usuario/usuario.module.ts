import { Module } from "@nestjs/common";
import { UsuarioController } from "./api/usuario.controller";
import { UsuarioRepositoryProvider, UsuarioServiceProvider } from "./providers/usuario.provider";
import { EmailEhUnicoValidator } from "./api/validations/email-eh-unico.validator";

@Module({
	controllers: [UsuarioController],
	providers: [UsuarioServiceProvider, UsuarioRepositoryProvider, EmailEhUnicoValidator]
})
export class UsuarioModule {}
