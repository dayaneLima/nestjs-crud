import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validations/email-eh-unico.validator';

export class UsuarioInsercaoDTO {
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	nome: string;

	@IsEmail({}, { message: 'E-mail informado é inválido' })
	@EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
	email: string;

	@MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
	senha: string;
}