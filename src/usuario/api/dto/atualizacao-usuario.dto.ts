import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validations/email-eh-unico.validator';

export class AtualizacaoUsuarioDTO {
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	@IsOptional()
	nome: string;

	@IsEmail({}, { message: 'E-mail informado é inválido' })
	@EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
	@IsOptional()
	email: string;

	@MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
	@IsOptional()
	senha: string;
}
