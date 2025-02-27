import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateTasaDto } from './createtasa.dto';
import { UpdateTasaDto } from './updatetasa.dto';
import { TasasService } from './tasa.service';
@Controller('tasa')
export class TasaController {

    constructor(private tasaService: TasasService) { }

    @Get()
    getTipocambios() {
        return this.tasaService.getTasa();
    }

    @Get('tasa_defecto/')
    public async getPorDefecto(){
        return await this.tasaService.getPordefecto();
    }

    @Get(':id')
    public async getEdit(@Param('id') id: number) {

        return await this.tasaService.edit(id);
    }

     @Post()
    createTasa(@Body() createTasaDto: CreateTasaDto) {
        return this.tasaService.createTasa(createTasaDto);
    }

 

    @Put(':id')
    async updateTasa(@Param('id', ParseIntPipe) id: number, @Body() updateTasaDto: UpdateTasaDto) {
        await this.tasaService.updateTasa(id, updateTasaDto);
    }

    @Delete(':id')
    async deleteTasa(@Param('id', ParseIntPipe) id: number) {
        await this.tasaService.deleteTasa(id);
    }

}