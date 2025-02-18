import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaEntitiy } from './categoria.entity'

@Entity({ name: 'subcategorias' })
export class SubcategoriaEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    nombre: string;

    @ManyToOne(()=>CategoriaEntitiy, categorias => categorias.id)
    @JoinColumn({'name': 'categoria_id'})
    categorias: CategoriaEntitiy;

    @Column({ type: 'int' })
    status_id: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}