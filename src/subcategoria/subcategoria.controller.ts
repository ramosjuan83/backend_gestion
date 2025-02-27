import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateSubcategoriaDto } from './createsubcategoria.dto';
import { UpdateSubcategoriaDto } from './updatesubcategoria.dto';
import { SubcategoriasService } from './subcategoria.service';
@Controller('subcategoria')
export class SubcategoriaController {

    constructor(private subcategoriaService: SubcategoriasService) { }

    @Get()
    getSubcategorias() {
        return this.subcategoriaService.getSubcategoria();
    }

    @Get(':id')
    public async getEdit(@Param('id') id: number) {

        return await this.subcategoriaService.edit(id);
    }

     @Post()
    createSubcategoria(@Body() createSubcategoriaDto: CreateSubcategoriaDto) {
        return this.subcategoriaService.createSubcategoria(createSubcategoriaDto);
    }

 

    @Put(':id')
    async updateSubcategoria(@Param('id', ParseIntPipe) id: number, @Body() updateSubcategoriaDto: UpdateSubcategoriaDto) {
        await this.subcategoriaService.updateSubcategoria(id, updateSubcategoriaDto);
    }

    @Delete(':id')
    async deleteSubcategoria(@Param('id', ParseIntPipe) id: number) {
        await this.subcategoriaService.deleteSubcategoria(id);
    }

    @Get('tipo/:id')
    public async getTipoCategoria(@Param('id') id: number) {
        return await this.subcategoriaService.tipo_categoria(id);
    }

}