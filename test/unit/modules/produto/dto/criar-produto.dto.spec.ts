import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ProdutoCaracteristicaDTO } from '../../../../../src/modules/produto/dto/produto-caracteristica.dto';

describe('CriarProdutoDTO', () => {
	it('deve ser válido com valores válidos', async () => {
		// Arrange
		const criarProdutoDTO = plainToInstance(ProdutoCaracteristicaDTO, {
			nome: '',
			id: '',
			descricao: ''
		});

		// Act
		const erros = await validate('CriarProdutoDTO', criarProdutoDTO);
		console.log(typeof criarProdutoDTO, 'njkhjkbjbh');
		console.log(criarProdutoDTO, 'njkhjkbjbh');
		console.log(erros);
		console.log(erros.length);

		//Assert
		expect(erros).toHaveLength(0);
	});

	// it('deve ser inválido com e-mail incorreto', async () => {
	// 	// Arrange
	// 	const criarUsuarioDTO = new CriarUsuarioDTO();
	// 	criarUsuarioDTO.nome = 'dayane';
	// 	criarUsuarioDTO.email = 'dayane';
	// 	criarUsuarioDTO.senha = 'a';

	// 	// Act
	// 	const erros = await validate(criarUsuarioDTO);
	// 	console.log(criarUsuarioDTO, 'njkhjkbjbh');
	// 	console.log(erros);
	// 	console.log(erros.length);

	// 	//Assert
	// 	expect(erros.length).not.toBe(0);
	// 	// expect(JSON.stringify(erros)).toContain(`E-mail informado é inválido`);
	// });
});
