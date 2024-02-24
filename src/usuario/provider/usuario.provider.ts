import { Provider } from "@nestjs/common";
import { IUsuarioService } from "../application/usuario.interface.service";
import { UsuarioService } from "../application/usuario.service";
import { IUsuarioRepository } from "../domain/usuario.interface.repository";
import { UsuarioRepository } from "../data/usuario.repository";

export const UsuarioServiceProvider: Provider = {
	provide: IUsuarioService,
	useClass: UsuarioService
};

export const UsuarioRepositoryProvider: Provider = {
	provide: IUsuarioRepository,
	useClass: UsuarioRepository
};
