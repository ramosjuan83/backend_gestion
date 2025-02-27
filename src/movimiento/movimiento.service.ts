import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovimientoEntitiy } from 'src/typeorm/entities/movimiento.entity';
import { CreateMovimientoParams, UpdateMovimientoParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';

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

            console.log(movimientoDetails);

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