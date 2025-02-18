import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'monedas' })
export class MonedaEntitiy {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    nombre: string;
    
    @Column()
    abreviatura: string;

    @Column()
    simbolo: string;
    
    @Column({ type: 'int' })
    status_id: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}