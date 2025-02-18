import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntitiy } from 'src/typeorm/entities/categoria.entity';
import { CreateCategoriaParams, UpdateCategoriaParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

    constructor(
        @InjectRepository(CategoriaEntitiy) private categoriaRepository: Repository<CategoriaEntitiy>,
    ) { }

    async getCategoria() {
        return this.categoriaRepository.find({where:{status_id:101}});
    }

    async edit(ids: number){
        const results = await this.categoriaRepository.findBy({ id: (ids) });
        return results;
    }

    async tipo_movimiento(ids: number){
        const results = await this.categoriaRepository.findBy({ tipo_movimiento: (ids) });
        return results;
    }

    async createCategoria(categoriaDetails: CreateCategoriaParams) {
        try {
            const newCategoria = this.categoriaRepository.create({ ...categoriaDetails, createdAt: new Date() });
            await this.categoriaRepository.save(newCategoria);

            return newCategoria;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateCategoria(id: number, updateCategoriaDetails: UpdateCategoriaParams) {

        try {
            await this.categoriaRepository.update({ id }, { ...updateCategoriaDetails })
            
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    deleteCategoria(id: number) {
        return this.categoriaRepository.update({id},{status_id:103})
    }
}