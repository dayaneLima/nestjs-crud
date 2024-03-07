import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class EntityCore {
	@PrimaryGeneratedColumn('uuid')
	id: string;
}
