import { IsNotEmpty, IsString } from 'class-validator';

export class CriarPedidoDTO {
	@IsString()
	@IsNotEmpty({ message: 'Usuário não informado' })
	usuarioId: string;
}
