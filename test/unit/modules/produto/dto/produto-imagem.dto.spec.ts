import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ProdutoImagemDTO } from '../../../../../src/modules/produto/dto/produto-imagem.dto';

describe('ProdutoImagemDTO', () => {
	it('deve ser válido com valores válidos', async () => {
		// Arrange
		const produtoCaracteristicaDTO = plainToInstance(ProdutoImagemDTO, {
			url: 'www.imagem.com.br',
			descricao: 'embalagem'
		});

		// Act
		const erros = await validate('ProdutoImagemDTO', produtoCaracteristicaDTO);

		//Assert
		expect(erros).toHaveLength(0);
	});

	it('deve ser inválido com url em formato incorreto', async () => {
		// Arrange
		const produtoCaracteristicaDTO = plainToInstance(ProdutoImagemDTO, {
			url: 'wwwimagemcombr',
			descricao: 'embalagem'
		});

		// Act
		const erros = await validate('ProdutoImagemDTO', produtoCaracteristicaDTO);

		//Assert
		expect(erros).toHaveLength(1);
	});

	it('deve ser inválido com valores obrigatórios não preenchidos', async () => {
		// Arrange
		const produtoCaracteristicaDTO = plainToInstance(ProdutoImagemDTO, {
			nome: '',
			descricao: ''
		});

		// Act
		const erros = await validate('ProdutoImagemDTO', produtoCaracteristicaDTO);

		//Assert
		expect(erros).toHaveLength(2);
	});
});
