import { Injectable } from '@nestjs/common';
import { Usuario } from '../domain/usuario.entity';
import { IUsuarioRepository } from '../domain/usuario.interface.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UsuarioRepository implements IUsuarioRepository {
	constructor(@InjectRepository(Usuario) private readonly usuarioTypeOrmRepository: Repository<Usuario>) {}

	public async inserir(usuario: Usuario): Promise<Usuario> {
		return await this.usuarioTypeOrmRepository.save(usuario);
	}

	public async listar(): Promise<Usuario[]> {
		return await this.usuarioTypeOrmRepository.find();
	}

	public async verificarExiste(email: string, id?: string): Promise<boolean> {
		if (id) {
			return (
				(await this.usuarioTypeOrmRepository.count({
					where: { email, id: Not(id) }
				})) > 0
			);
		}

		return (
			(await this.usuarioTypeOrmRepository.count({
				where: { email }
			})) > 0
		);
	}

	public async atualizar(usuario: Usuario): Promise<Usuario> {
		return await this.usuarioTypeOrmRepository.save(usuario);
	}

	public async obter(id: string): Promise<Usuario | null> {
		return await this.usuarioTypeOrmRepository.findOneBy({ id });
	}

	public async obterPorEmail(email: string): Promise<Usuario | null> {
		return await this.usuarioTypeOrmRepository.findOneBy({ email });
	}

	public async excluir(id: string): Promise<boolean> {
		const itemDeletado = await this.usuarioTypeOrmRepository.delete(id);
		return itemDeletado.affected != null && itemDeletado.affected > 0;
	}
}
