import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntitiy } from 'src/typeorm/entities/categoria.entity';
import { CreateCategoriaParams, UpdateCategoriaParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

    constructor(
        @InjectRepository(CategoriaEntitiy) private categoriaRepository: Repository<CategoriaEntitiy>,
    ) { }

    getCategoria() {
        console.log("pasa");
        return this.categoriaRepository.find();
    }

    createCategoria(categoriaDetails: CreateCategoriaParams) {


        const newCategoria = this.categoriaRepository.create({ ...categoriaDetails, createdAt: new Date() });
        return this.categoriaRepository.save(newCategoria);
    }

    updateCategoria(id: number, updateCategoriaDetails: UpdateCategoriaParams) {
        return this.categoriaRepository.update({ id }, { ...updateCategoriaDetails })
    }

    deleteCategoria(id: number) {
        return this.categoriaRepository.delete(id)
    }
}