import { PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

export class CriptografarSenhaPipe implements PipeTransform {
	constructor(private configService: ConfigService) {}

	async transform(senha: string) {
		const sal = this.configService.get<string>('SAL_SENHA');
		return await bcrypt.hash(senha, sal!);
	}
}
