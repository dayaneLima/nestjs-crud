import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { UsuarioRepositoryProvider, UsuarioServiceProvider } from '../providers/usuario.provider';
import { EmailEhUnicoValidator } from '../api/validations/email-eh-unico.validator';

describe('UsuarioService', () => {
	let service: UsuarioService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UsuarioServiceProvider, UsuarioRepositoryProvider, EmailEhUnicoValidator]
		}).compile();
		service = module.get<UsuarioService>(UsuarioService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('inserir', () => {
		it('criar usuário', () => {
			//   // Arrange
			//   service.tweets = [];
			//   const payload = "This is my tweet";
			//   // Act
			//   const tweet = service.createTweet(payload);
			//   // Assert
			//   expect(tweet).toBe(payload);
			//   expect(service.tweets).toHaveLength(1);
		});
	});
});
