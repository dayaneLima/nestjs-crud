import { ProdutoCaracteristicaRetornoDTO } from './produto-caracteristica-retorno.dto';
import { ProdutoImagemRetornoDTO } from './produto-imagem-retorno.dto';

export class ProdutoRetornoDTO {
	constructor(
		readonly id: string,
		readonly nome: string,
		readonly caracteristicas: ProdutoCaracteristicaRetornoDTO[],
		readonly imagens: ProdutoImagemRetornoDTO[]
	) {}
}
