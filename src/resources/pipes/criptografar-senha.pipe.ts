import { PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

export class CriptografarSenhaPipe implements PipeTransform {
	constructor(private configService: ConfigService) {}

	async transform(senha: string) {
		// const sal = this.configService.get<string>('SAL_SENHA');
		const sal = '$2b$10$mH2JcKdhKwkCzE44B1Tcyu';
		return await bcrypt.hash(senha, sal!);
	}
}
