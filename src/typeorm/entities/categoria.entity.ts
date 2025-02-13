import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categorias' })
export class CategoriaEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    tipo_movimiento: number;

    @Column({ unique: true })
    nombre: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}