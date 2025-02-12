import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categorias' })
export class CategoriaEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    nombre: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}