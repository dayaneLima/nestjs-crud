import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class InsercaoEstacionamentoDTO {
	@IsUUID(undefined, { message: 'ID de usuário inválido' })
	usuarioId: string;

	@IsString()
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	nome: string;
}
