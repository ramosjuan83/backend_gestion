import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateMovimientoDto } from './createmovimiento.dto';
import { UpdateMovimientoDto } from './updatemovimiento.dto';
import { MovimientosService } from './movimiento.service';
@Controller('movimiento')
export class MovimientoController {

    constructor(private movimientoService: MovimientosService) { }

    @Post()
    getTipocambios(@Body() datos: object) {
        //let filtro={fecha_desde:'2025-02-22',fecha_hasta:'2025-02-27'};
        return this.movimientoService.getMovimiento(datos);
    }

    @Get(':id')
    public async getEdit(@Param('id') id: number) {

        return await this.movimientoService.edit(id);
    }

     @Post()
    createMovimiento(@Body() createMovimientoDto: CreateMovimientoDto) {
        return this.movimientoService.createMovimiento(createMovimientoDto);
    }

 

    @Put(':id')
    async updateMovimiento(@Param('id', ParseIntPipe) id: number, @Body() updateMovimientoDto: UpdateMovimientoDto) {
        await this.movimientoService.updateMovimiento(id, updateMovimientoDto);
    }

    @Delete(':id')
    async deleteMovimiento(@Param('id', ParseIntPipe) id: number) {
        await this.movimientoService.deleteMovimiento(id);
    }

}