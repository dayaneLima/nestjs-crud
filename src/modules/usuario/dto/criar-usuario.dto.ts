import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validations/email-eh-unico.validator';

export class CriarUsuarioDTO {
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	nome: string;

	@IsEmail({}, { message: 'E-mail informado é inválido' })
	@EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
	email: string;

	@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+)(.{6,30})$/, {
		message: 'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres',
	})
	@MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
	senha: string;
}
