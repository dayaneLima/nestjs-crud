import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { EstacionamentoImagemDTO } from './estacionamento-imagem.dto';

export class EstacionamentoInsercaoDTO {
	@IsString()
	@IsNotEmpty({ message: 'O nome não pode ser vazio' })
	nome: string;

	@IsArray()
	@ValidateNested()
	@Type(() => EstacionamentoImagemDTO)
	imagens: EstacionamentoImagemDTO[];
}
