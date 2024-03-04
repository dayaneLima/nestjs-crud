import { ListarProdutoCaracteristicaDTO } from './listar-produto-caracteristica.dto';
import { ListarProdutoImagemDTO } from './listar-produto-imagem.dto';

export class ListarProdutoDTO {
	constructor(
		readonly id: string,
		readonly nome: string,
		readonly caracteristicas: ListarProdutoCaracteristicaDTO[],
		readonly imagens: ListarProdutoImagemDTO[]
	) {}
}
