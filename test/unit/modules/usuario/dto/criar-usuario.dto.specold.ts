import { validate } from 'class-validator';
import { CriarUsuarioDTO } from '../../../../../src/modules/usuario/dtos/criar-usuario.dto';

describe('CriarUsuarioDTO', () => {
	// it('deve ser válido com valores válidos', async () => {
	// 	// Arrange
	// 	const criarUsuarioDTO: CriarUsuarioDTO = {
	// 		nome: 'dayane',
	// 		email: 'dayane.lim@gmail.com',
	// 		senha: 'Aa2#Bb4#'
	// 	};

	// 	// Act
	// 	const erros = await validate(criarUsuarioDTO);

	// 	//Assert
	// 	expect(erros).toHaveLength(0);
	// });

	it('deve ser inválido com e-mail incorreto', async () => {
		// Arrange
		const criarUsuarioDTO = new CriarUsuarioDTO();
		criarUsuarioDTO.nome = 'dayane';
		criarUsuarioDTO.email = 'dayane';
		criarUsuarioDTO.senha = 'a';

		// Act
		const erros = await validate(criarUsuarioDTO);
		console.log(criarUsuarioDTO, 'njkhjkbjbh');
		console.log(erros);
		console.log(erros.length);

		//Assert
		expect(erros.length).not.toBe(0);
		// expect(JSON.stringify(erros)).toContain(`E-mail informado é inválido`);
	});
});
