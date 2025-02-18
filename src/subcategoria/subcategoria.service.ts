import {  BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoriaEntitiy } from 'src/typeorm/entities/subcategoria.entity';
import { CreateSubcategoriaParams, UpdateSubcategoriaParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class SubcategoriasService {

    constructor(
        @InjectRepository(SubcategoriaEntitiy) private subcategoriaRepository: Repository<SubcategoriaEntitiy>,
    ) { }

    async getSubcategoria() {

        return this.subcategoriaRepository.find({relations:['categorias'], where:{ 
                status_id: 101 
              }});
    }

    async edit(ids: number){
        const results = await this.subcategoriaRepository.find({ relations:['categorias'], where:{ id: (ids) }});
        return results;
    }

    async createSubcategoria(subcategoriaDetails: CreateSubcategoriaParams) {
        try {
            const newSubcategoria = this.subcategoriaRepository.create({ ...subcategoriaDetails, createdAt: new Date() });
            await this.subcategoriaRepository.save(newSubcategoria);

            return newSubcategoria;
        } catch (error) {
            // /console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }

        
    }


    async updateSubcategoria(id: number, updateSubcategoriaDetails: UpdateSubcategoriaParams) {

        try {
            await this.subcategoriaRepository.update({ id }, { ...updateSubcategoriaDetails })
            
        } catch (error) {
            console.log({error})
            if(error.code=='ER_DUP_ENTRY')
                throw new BadRequestException('Está duplicado');
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    deleteSubcategoria(id: number) {
        return this.subcategoriaRepository.update({id},{status_id:103})
    }
}