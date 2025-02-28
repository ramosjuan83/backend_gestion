import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasaEntitiy } from 'src/typeorm/entities/tasa.entity';
import { CreateTasaParams, UpdateTasaParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TasasService {

    constructor(
        @InjectRepository(TasaEntitiy) private tasaRepository: Repository<TasaEntitiy>, private dataSource: DataSource 
    ) { }

    async getTasa() {

        let resul = await this.tasaRepository.find({relations:['monedas','tipocambios'], where:{ 
            status_id: 101 
          }});
          //console.log("resul",resul);
        return resul;
    }

    async getPordefecto() {

        let resul = await this.tasaRepository.find({relations:['monedas','tipocambios'],where:{ status_id: 101, defecto: true }});
        //console.log("resul",resul);
        return resul;
    }

    async edit(ids: number){
        const results = await this.tasaRepository.find({relations:['monedas','tipocambios'], where:{ id: (ids) }});
        return results;
    }

    async createTasa(tasaDetails: CreateTasaParams) {
        try {

            //console.log({ ...tasaDetails, createdAt: new Date() });
            // const newTasa = this.tasaRepository.create({ ...tasaDetails, createdAt: new Date() });
            // await this.tasaRepository.save(newTasa);

            const newTasa = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into('tasas')
            .values([
                { ...tasaDetails, createdAt: new Date() }
            ])
            .execute()

            return newTasa;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateTasa(id: number, updatetasaDetails: UpdateTasaParams) {

        try {
            await this.tasaRepository.update({ id }, { ...updatetasaDetails })
            
        } catch (error) {
            console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    deleteTasa(id: number) {
        return this.tasaRepository.update({id},{status_id:103})
    }

    async actualizaPorDefecto(instance: TasaEntitiy) {
        //console.log("service",instance);

     if(instance.defecto==true){

                 const tasa  = await this.dataSource
                    .createQueryBuilder()
                    .update('tasas')
                    .set({ defecto: 0 })
                    .where("id != :id", {id: instance.id})
                    .execute();


     }   



    }

}