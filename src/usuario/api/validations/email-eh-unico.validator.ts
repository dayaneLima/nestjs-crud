import { Inject, Injectable } from '@nestjs/common';
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';
import { IUsuarioService } from '../../services/usuario.interface.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
	constructor(@Inject(IUsuarioService) private readonly usuarioService: IUsuarioService) {}

	async validate(value: any): Promise<boolean> {
		return !(await this.usuarioService.verificarUsuarioExiste(value));
	}
}

export const EmailEhUnico = (opcoesValidacao: ValidationOptions) => {
	return (objeto: object, propriedade: string) => {
		registerDecorator({
			target: objeto.constructor,
			propertyName: propriedade,
			options: opcoesValidacao,
			constraints: [],
			validator: EmailEhUnicoValidator
		});
	};
};
