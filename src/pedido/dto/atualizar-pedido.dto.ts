import { PartialType } from '@nestjs/mapped-types';
import { CriarPedidoDTO } from './criar-pedido.dto';

export class AtualizarPedidoDTO extends PartialType(CriarPedidoDTO) {}
