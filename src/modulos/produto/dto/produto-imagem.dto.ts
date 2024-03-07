import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Produto } from '../domain/produto.entity';

export class ProdutoImagemDTO {
	id: string;

	@IsUrl({}, { message: 'URL para imagem inválida' })
	url: string;

	@IsString()
	@IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
	descricao: string;

	produto: Produto;
}
