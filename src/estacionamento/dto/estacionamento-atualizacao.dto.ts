import { IsNotEmpty, IsOptional } from 'class-validator';

export class EstacionamentoAtualizacaoDTO {
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	@IsOptional()
	nome: string;
}
