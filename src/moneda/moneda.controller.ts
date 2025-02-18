import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateMonedaDto } from './createmoneda.dto';
import { UpdateMonedaDto } from './updatemoneda.dto';
import { MonedasService } from './moneda.service';
@Controller('moneda')
export class MonedaController {

    constructor(private monedaService: MonedasService) { }

    @Get()
    getMonedas() {
        return this.monedaService.getMoneda();
    }

    @Get(':id')
    public async getEdit(@Param('id') id: number) {
       
        return await this.monedaService.edit(id);
    }

    @Post()
    createMoneda(@Body() createMonedaDto: CreateMonedaDto) {
        return this.monedaService.createMoneda(createMonedaDto);
    }

 

    @Put(':id')
    async updateMoneda(@Param('id', ParseIntPipe) id: number, @Body() updateMonedaDto: UpdateMonedaDto) {
        await this.monedaService.updateMoneda(id, updateMonedaDto);
    }

    @Delete(':id')
    async deleteMoneda(@Param('id', ParseIntPipe) id: number) {
        await this.monedaService.deleteMoneda(id);
    }


}