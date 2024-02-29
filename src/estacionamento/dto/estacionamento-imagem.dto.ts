import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Estacionamento } from 'src/estacionamento/domain/estacionamento.entity';

export class EstacionamentoImagemDTO {
	id: string;
	estacionamento: Estacionamento;

	@IsUrl({}, { message: 'URL para imagem inválida' })
	url: string;

	@IsString()
	@IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
	descricao: string;
}
