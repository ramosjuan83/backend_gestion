import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TasaEntitiy } from './tasa.entity'
import { CategoriaEntitiy } from './categoria.entity'
import { SubcategoriaEntitiy } from './subcategoria.entity'



@Entity({ name: 'movimientos' })
export class MovimientoEntitiy {
   
    //constructor(private readonly moduleRef: ModuleRef) { }

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ManyToOne(()=>CategoriaEntitiy, categorias => categorias.id)
    @JoinColumn({'name': 'categoria_id'})
    categorias: CategoriaEntitiy;

    @ManyToOne(()=>SubcategoriaEntitiy, subcategorias => subcategorias.id)
    @JoinColumn({'name': 'subcategoria_id'})
    subcategorias: SubcategoriaEntitiy;
    

    @ManyToOne(()=>TasaEntitiy, tasas => tasas.id)
    @JoinColumn({'name': 'tasa_id'})
    tasas: TasaEntitiy;

    @Column({type: 'date'})
    fecha_movimiento: Date;

    @Column({ type: 'time' })
    hora: Date;

    @Column({ type: 'float' })
    monto_bolivares: number;

    @Column({ type: 'float' })
    monto_divisas: number;

    @Column({ type: 'int' })
    status_id: number;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}




//import { ProductService } from './product.service';

