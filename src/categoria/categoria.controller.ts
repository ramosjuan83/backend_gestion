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

    @Get(':id')
    public async getEdit(@Param('id') id: number) {
       
        return await this.categoriaService.edit(id);
    }

     @Post()
    createCategorai(@Body() createCategoriaDto: CreateCategoriaDto) {
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

    @Get('tipo/:id')
    public async getTipoMovimiento(@Param('id') id: number) {
        return await this.categoriaService.tipo_movimiento(id);
    }

}