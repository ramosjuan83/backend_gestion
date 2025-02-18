import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MonedaEntitiy } from 'src/typeorm/entities/moneda.entity';
import { CreateMonedaParams, UpdateMonedaParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class MonedasService {

    constructor(
        @InjectRepository(MonedaEntitiy) private monedaRepository: Repository<MonedaEntitiy>,
    ) { }

    async getMoneda() {
        return this.monedaRepository.find({where:{status_id:101}});
    }

    async edit(ids: number){
        const results = await this.monedaRepository.findBy({ id: (ids) });
        return results;
    }


    async createMoneda(monedaDetails: CreateMonedaParams) {
        try {
            const newMoneda = this.monedaRepository.create({ ...monedaDetails, createdAt: new Date() });
            await this.monedaRepository.save(newMoneda);

            return newMoneda;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateMoneda(id: number, updateMonedaDetails: UpdateMonedaParams) {

        try {
            await this.monedaRepository.update({ id }, { ...updateMonedaDetails })
            
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    deleteMoneda(id: number) {
        return this.monedaRepository.update({id},{status_id:103})
    }
}