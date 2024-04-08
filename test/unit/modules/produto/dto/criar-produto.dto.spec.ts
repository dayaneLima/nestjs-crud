import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CriarProdutoDTO } from '../../../../../src/modules/produto/dto/criar-produto.dto';

describe('CriarProdutoDTO', () => {
	it('deve ser inválido com valores obrigatórios não preenchidos', async () => {
		// Arrange
		const criarProdutoDTO = plainToInstance(CriarProdutoDTO, {
			nome: '',
			valor: 0,
			quantidadeDisponivel: 0,
			descricao: '',
			caracteristicas: [],
			imagens: [],
			categoria: ''
		});

		// Act
		const erros = await validate('CriarProdutoDTO', criarProdutoDTO);

		//Assert
		expect(erros).toHaveLength(7);
	});
});
