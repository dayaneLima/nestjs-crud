import { UsuarioPayload } from './usuario-payload';
import { Request } from 'express';

export interface RequestUsuario extends Request {
	usuario: UsuarioPayload;
}
