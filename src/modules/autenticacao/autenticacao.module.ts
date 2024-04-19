import { Module } from '@nestjs/common';
import { AutenticacaoController } from './controllers/autenticacao.controller';
import { AutenticacaoServiceProvider } from './providers/autenticacao.provider';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		UsuarioModule,
		JwtModule.registerAsync({
			useFactory: (configService: ConfigService) => {
				return {
					secret: configService.get<string>('SECRET_JWT'),
					signOptions: { expiresIn: '72h' }
				};
			},
			inject: [ConfigService],
			global: true
		})
	],
	controllers: [AutenticacaoController],
	providers: [AutenticacaoServiceProvider]
})
export class AutenticacaoModule {}
