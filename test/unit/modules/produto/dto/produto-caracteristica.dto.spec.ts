import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ProdutoCaracteristicaDTO } from '../../../../../src/modules/produto/dto/produto-caracteristica.dto';

describe('ProdutoCaracteristicaDTO', () => {
	it('deve ser válido com valores válidos', async () => {
		// Arrange
		const produtoCaracteristicaDTO = plainToInstance(ProdutoCaracteristicaDTO, {
			nome: 'Tamanho',
			descricao: '2 X 2'
		});

		// Act
		const erros = await validate('ProdutoCaracteristicaDTO', produtoCaracteristicaDTO);

		//Assert
		expect(erros).toHaveLength(0);
	});

	it('deve ser inválido com valores obrigatórios não preenchidos', async () => {
		// Arrange
		const produtoCaracteristicaDTO = plainToInstance(ProdutoCaracteristicaDTO, {
			nome: '',
			descricao: ''
		});

		// Act
		const erros = await validate('ProdutoCaracteristicaDTO', produtoCaracteristicaDTO);

		//Assert
		expect(erros).toHaveLength(2);
	});
});
