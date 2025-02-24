import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateTipocambioDto } from './createtipocambio.dto';
import { UpdateTipocambioDto } from './updatetipocambio.dto';
import { TipocambiosService } from './tipocambio.service';
@Controller('tipocambio')
export class TipocambioController {

    constructor(private tipocambioService: TipocambiosService) { }

    @Get()
    getTipocambios() {
        return this.tipocambioService.getTipocambio();
    }

    @Get(':id')
    public async getEdit(@Param('id') id: number) {

        return await this.tipocambioService.edit(id);
    }

     @Post()
    createTipocambio(@Body() createTipocambioDto: CreateTipocambioDto) {
        return this.tipocambioService.createTipocambio(createTipocambioDto);
    }

 

    @Put(':id')
    async updateTipocambio(@Param('id', ParseIntPipe) id: number, @Body() updateTipocambioDto: UpdateTipocambioDto) {
        await this.tipocambioService.updateTipocambio(id, updateTipocambioDto);
    }

    @Delete(':id')
    async deleteTipocambio(@Param('id', ParseIntPipe) id: number) {
        await this.tipocambioService.deleteTipocambio(id);
    }

    @Get('tipo/:id')
    public async getTipoCambio(@Param('id') id: number) {
        return await this.tipocambioService.tipo_cambio(id);
    }

}