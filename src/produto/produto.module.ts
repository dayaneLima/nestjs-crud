import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './domain/produto.entity';
import { ProdutoController } from './api/produto.controller';
import { ProdutoRepositoryProvider, ProdutoServiceProvider } from './providers/produto.provider';

@Module({
	imports: [TypeOrmModule.forFeature([Produto])],
	controllers: [ProdutoController],
	providers: [ProdutoServiceProvider, ProdutoRepositoryProvider]
})
export class ProdutoModule {}
