import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateCategoriaDto } from './createcategoria.dto';
import { UpdateCategoriaDto } from './updatecategoria.dto';
import { CategoriasService } from './categoria.service';
@Controller('categoria')
export class CategoriaController {

    constructor(private categoriaService: CategoriasService) { }

    @Get()
    getCategorias() {
        return this.categoriaService.getCategoria();
    }

    @Post()
    createCategoria(@Body() createCategoriaDto: CreateCategoriaDto) {
        return this.categoriaService.createCategoria(createCategoriaDto);
    }

    @Put(':id')
    async updateCategoria(@Param('id', ParseIntPipe) id: number, @Body() updateCategoriaDto: UpdateCategoriaDto) {
        await this.categoriaService.updateCategoria(id, updateCategoriaDto);
    }

    @Delete(':id')
    async deleteCategoria(@Param('id', ParseIntPipe) id: number) {
        await this.categoriaService.deleteCategoria(id);
    }

}