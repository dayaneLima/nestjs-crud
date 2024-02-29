import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min, ValidateNested } from 'class-validator';
import { ProdutoCaracteristicaDTO } from './produto-caracteristica.dto';
import { ProdutoImagemDTO } from './produto-imagem.dto';

export class ProdutoAtualizacaoDTO {
	@IsUUID(undefined, { message: 'ID de usuário inválido' })
	usuarioId: string;

	@IsString()
	@IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
	@IsOptional()
	nome: string;

	@IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
	@IsOptional()
	@Min(1, { message: 'O valor precisa ser maior que zero' })
	@IsOptional()
	valor: number;

	@IsNumber()
	@Min(0, { message: 'Quantidade mínima inválida' })
	@IsOptional()
	quantidadeDisponivel: number;

	@IsString()
	@IsOptional()
	descricao: string;

	@ValidateNested()
	@IsArray()
	@ArrayMinSize(1)
	@Type(() => ProdutoCaracteristicaDTO)
	@IsOptional()
	caracteristicas: ProdutoCaracteristicaDTO[];

	@ValidateNested()
	@IsArray()
	@ArrayMinSize(1)
	@Type(() => ProdutoImagemDTO)
	@IsOptional()
	imagens: ProdutoImagemDTO[];

	@IsString()
	@IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
	@IsOptional()
	categoria: string;
}
