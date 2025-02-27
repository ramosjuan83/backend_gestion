import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoEntitiy } from 'src/typeorm/entities/movimiento.entity';
import { MovimientoController } from './movimiento.controller';
import { MovimientosService } from './movimiento.service';
//import { MovimientoItemSubscriber } from 'src/typeorm/entities/tasa.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoEntitiy])],
  controllers: [MovimientoController],
  providers: [MovimientosService]
})
export class MovimientosModule { }