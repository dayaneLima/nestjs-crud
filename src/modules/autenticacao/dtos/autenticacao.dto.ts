import { IsEmail, IsNotEmpty } from 'class-validator';

export class AutenticacaoDTO {
	@IsEmail(undefined, { message: 'o e-mail informado é inválido' })
	email: string;

	@IsNotEmpty({ message: 'A senha não pode estar vazia' })
	senha: string;
}
