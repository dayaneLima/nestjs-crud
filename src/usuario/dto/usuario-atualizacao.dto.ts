import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailEhUnico } from '../validations/email-eh-unico.validator';

export class UsuarioAtualizacaoDTO {
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	@IsOptional()
	nome: string;

	@IsEmail({}, { message: 'E-mail informado é inválido' })
	@EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
	@IsOptional()
	email: string;
}
