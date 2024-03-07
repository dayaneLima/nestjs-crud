import { Provider } from '@nestjs/common';
import { IProdutoRepository } from '../domain/produto.interface.repository';
import { ProdutoRepository } from '../data/produto.repository';
import { IProdutoService } from '../services/produto.interface.service';
import { ProdutoService } from '../services/produto.service';

export const ProdutoServiceProvider: Provider = {
	provide: IProdutoService,
	useClass: ProdutoService
};

export const ProdutoRepositoryProvider: Provider = {
	provide: IProdutoRepository,
	useClass: ProdutoRepository
};
