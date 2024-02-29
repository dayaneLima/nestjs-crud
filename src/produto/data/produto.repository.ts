import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../domain/produto.entity';
import { IProdutoRepository } from '../domain/produto.interface.repository';

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
	constructor(@InjectRepository(Produto) private readonly produtoTypeOrmRepository: Repository<Produto>) {}

	public async inserir(produto: Produto): Promise<Produto> {
		return await this.produtoTypeOrmRepository.save(produto);
	}

	public async listar(): Promise<Produto[]> {
		return await this.produtoTypeOrmRepository.find();
	}

	public async atualizar(produto: Produto): Promise<Produto> {
		return await this.produtoTypeOrmRepository.save(produto);
	}

	public async obter(id: string): Promise<Produto> {
		return await this.produtoTypeOrmRepository.findOne({
			where: { id: id }
		});
	}

	public async excluir(id: string): Promise<boolean> {
		return (await this.produtoTypeOrmRepository.delete(id)).affected > 0;
	}
}
