import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AutenticacaoDTO } from '../dtos/autenticacao.dto';
import { IAutenticacaoService } from '../services/autenticacao.interface.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('autenticacao')
@Controller('autenticacao')
export class AutenticacaoController {
	constructor(@Inject(IAutenticacaoService) private readonly autenticacaoService: IAutenticacaoService) {}

	@Post('login')
	autenticar(@Body() { email, senha }: AutenticacaoDTO) {
		return this.autenticacaoService.autenticar(email, senha);
	}
}
