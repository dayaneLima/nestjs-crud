import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { EstacionamentoImagemDTO } from './estacionamento-imagem.dto';

export class InsercaoEstacionamentoDTO {
	@IsUUID(undefined, { message: 'ID de usuário inválido' })
	usuarioId: string;

	@IsString()
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	nome: string;

	@IsArray()
	@ValidateNested()
	@Type(() => EstacionamentoImagemDTO)
	imagens: EstacionamentoImagemDTO[];
}
