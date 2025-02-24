import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipocambioEntitiy } from 'src/typeorm/entities/tipocambio.entity';
import { CreateTipocambioParams, UpdateTipocambioParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TipocambiosService {

    constructor(
        @InjectRepository(TipocambioEntitiy) private tipocambioRepository: Repository<TipocambioEntitiy>,
    ) { }

    async getTipocambio() {

        return this.tipocambioRepository.find({relations:['monedas'], where:{ 
                status_id: 101 
              }});
    }

    async edit(ids: number){
        const results = await this.tipocambioRepository.find({ relations:['monedas'], where:{ id: (ids) }});
        return results;
    }

    async createTipocambio(tipocambioDetails: CreateTipocambioParams) {
        try {
            const newTipocambio = this.tipocambioRepository.create({ ...tipocambioDetails, createdAt: new Date() });
            await this.tipocambioRepository.save(newTipocambio);

            return newTipocambio;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateTipocambio(id: number, updatetipocambioDetails: UpdateTipocambioParams) {

        try {
            await this.tipocambioRepository.update({ id }, { ...updatetipocambioDetails })
            
        } catch (error) {
            console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    async tipo_cambio(ids: number){

    
       const mon= await this.tipocambioRepository.find({
            relations: { monedas  : true },
            where: {
                monedas: { id: ids },
            },
        })
        return mon;
    }

    deleteTipocambio(id: number) {
        return this.tipocambioRepository.update({id},{status_id:103})
    }
}