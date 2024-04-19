import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './domain/produto.entity';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoRepositoryProvider, ProdutoServiceProvider } from './providers/produto.provider';

@Module({
	imports: [TypeOrmModule.forFeature([Produto])],
	controllers: [ProdutoController],
	providers: [ProdutoServiceProvider, ProdutoRepositoryProvider],
	exports: [ProdutoRepositoryProvider]
})
export class ProdutoModule {}
