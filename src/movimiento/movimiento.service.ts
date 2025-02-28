import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimientoEntitiy } from 'src/typeorm/entities/movimiento.entity';
import { CreateMovimientoParams, UpdateMovimientoParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';
import {_} from 'lodash'; 

@Injectable()
export class MovimientosService {

    constructor(
        @InjectRepository(MovimientoEntitiy) private movimientoRepository: Repository<MovimientoEntitiy>, private dataSource: DataSource 
    ) { }

    async getMovimiento(filtros) {


          const movimientos = await this.dataSource.getRepository('movimientos')
          .createQueryBuilder("movimientos")
          .where("movimientos.status_id = :status_id", { status_id: 101 })
          .andWhere('movimientos.fecha_movimiento >= :desde', {desde: filtros.fecha_desde } )
          .andWhere('movimientos.fecha_movimiento <= :hasta', {hasta: filtros.fecha_hasta })
          .leftJoinAndSelect("movimientos.tasas", "tasa")
          .leftJoinAndSelect("movimientos.categorias", "categoria")
          .leftJoinAndSelect("movimientos.subcategorias", "subcategoria")
          .leftJoinAndSelect("tasa.monedas", "moneda")
          .getMany()

         //console.log("movimientos",movimientos);


         let ingresos=movimientos.filter(((e)=>e.categorias.tipo_movimiento==1));
         let egresos=movimientos.filter(((e)=>e.categorias.tipo_movimiento==2));

         
         let total_ingresos=ingresos.reduce(
             (t, i) => t + i.monto_divisas,
             0
            );
        
            let total_egresos=egresos.reduce(
            (t, i) => t + i.monto_divisas,
            0
          );
        return {movimiento:movimientos, totales:{ingreso:total_ingresos, egreso: total_egresos, saldo: total_ingresos-total_egresos}};
    }

    async getResumen(filtros) {

        let movimientos = await this.dataSource.getRepository('movimientos')
        .createQueryBuilder("movimientos")
        .where("movimientos.status_id = :status_id", { status_id: 101 })
        .andWhere('movimientos.fecha_movimiento >= :desde', {desde: filtros.fecha_desde } )
        .andWhere('movimientos.fecha_movimiento <= :hasta', {hasta: filtros.fecha_hasta })
        .leftJoinAndSelect("movimientos.tasas", "tasa")
        .leftJoinAndSelect("movimientos.categorias", "categoria")
        .leftJoinAndSelect("movimientos.subcategorias", "subcategoria")
        .leftJoinAndSelect("tasa.monedas", "moneda")
        .getMany()

        movimientos=movimientos.map((e)=>{
            return {
                ...e,
                clave:e.categorias.id,
                nombre_categoria:e.categorias.nombre,
                tipo:e.categorias.tipo_movimiento
            }
        });



     function resumen_categorias(arr){

        let resumenCategorias=_.chain(arr).groupBy('nombre_categoria').map((values,key)=>{
            return{
                id:values[0].id,
                fecha_movimiento:values[0].fecha_movimiento,
                hora:values[0].hora,
                nombre_categoria: values[0].nombre_categoria,
                monto_bolivares:values.reduce(
                    (t, i) => t + i.monto_bolivares,
                    0
                   ),
                monto_divisas:values.reduce(
                    (t, i) => t + i.monto_divisas,
                    0
                   ),
                clave: values[0].clave
            }
        }).value();

        return resumenCategorias;
     }

       let resumenMovimientos=_.chain(movimientos).groupBy("tipo").map((values,key)=>{
            return{
                id:values[0].id,
                tipo_movimiento:key=='1'?'Ingresos':'Egresos',
                fecha_movimiento:values[0].fecha_movimiento,
                hora:values[0].hora,
                nombre_categoria: values[0].nombre_categoria,
                categorias:resumen_categorias(values),
                monto_bolivares:values.reduce(
                    (t, i) => t + i.monto_bolivares,
                    0
                   ),
                monto_divisas:values.reduce(
                    (t, i) => t + i.monto_divisas,
                    0
                   ),
                clave: values[0].clave
            }
        }).value();

      
        
      return {resumen:resumenMovimientos};
  }

    async edit(ids: number){

        const movimientos = await this.dataSource.getRepository('movimientos')
          .createQueryBuilder("movimientos")
          .where("movimientos.status_id = :status_id ", { status_id: 101 })
          .andWhere("movimientos.id = :id ", { id: ids })
          .leftJoinAndSelect("movimientos.tasas", "tasa")
          .leftJoinAndSelect("movimientos.categorias", "categoria")
          .leftJoinAndSelect("movimientos.subcategorias", "subcategoria")
          .leftJoinAndSelect("tasa.monedas", "moneda")
          .leftJoinAndSelect("tasa.tipocambios", "tipocambio")
          .getMany()


        return movimientos;
    }

    async createMovimiento(movimientoDetails: CreateMovimientoParams) {
        try {

            //console.log({ ...tasaDetails, createdAt: new Date() });
            // const newTasa = this.movimientoRepository.create({ ...tasaDetails, createdAt: new Date() });
            // await this.movimientoRepository.save(newTasa);


            const newMovimiento = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into('movimientos')
            .values([
                { ...movimientoDetails, createdAt: new Date() }
            ])
            .execute()

            return newMovimiento;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateMovimiento(id: number, updatemovimientoDetails: UpdateMovimientoParams) {

        try {
            await this.movimientoRepository.update({ id }, { ...updatemovimientoDetails })
            
        } catch (error) {
            console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    deleteMovimiento(id: number) {
        return this.movimientoRepository.update({id},{status_id:103})
    }

    // async actualizaPorDefecto(instance: MovimientoEntitiy) {
    //     //console.log("service",instance);

    //  if(instance.defecto==true){

    //              const tasa  = await this.dataSource
    //                 .createQueryBuilder()
    //                 .update('movimiento')
    //                 .set({ defecto: 0 })
    //                 .where("id != :id", {id: instance.id})
    //                 .execute();


    //  }   



    // }

}