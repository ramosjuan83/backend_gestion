import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MonedaEntitiy } from './moneda.entity'

@Entity({ name: 'tipocambios' })
export class TipocambioEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    nombre: string;

    @ManyToOne(()=>MonedaEntitiy, monedas => monedas.id)
    @JoinColumn({'name': 'moneda_id'})
    monedas: MonedaEntitiy;

    @Column({ type: 'int' })
    status_id: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}