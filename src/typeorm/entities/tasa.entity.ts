import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, AfterInsert } from "typeorm";
import { MonedaEntitiy } from './moneda.entity'
import { TipocambioEntitiy } from './tipocambio.entity'



@Entity({ name: 'tasas' })
export class TasaEntitiy {
   
    //constructor(private readonly moduleRef: ModuleRef) { }

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ManyToOne(()=>MonedaEntitiy, monedas => monedas.id)
    @JoinColumn({'name': 'moneda_id'})
    monedas: MonedaEntitiy;

    @ManyToOne(()=>TipocambioEntitiy, tipocambios => tipocambios.id)
    @JoinColumn({'name': 'tipo_cambio_id'})
    tipocambios: TipocambioEntitiy;

    @Column()
    fecha: Date;

    @Column({ type: 'float' })
    monto_tasa: number;


    @Column({ type: 'boolean' })
    defecto: boolean;

    @Column({ type: 'int' })
    status_id: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}




//import { ProductService } from './product.service';

