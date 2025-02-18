import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipocambioEntitiy } from 'src/typeorm/entities/tipocambio.entity';
import { TipocambioController } from './tipocambio.controller';
import { TipocambiosService } from './tipocambio.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipocambioEntitiy])],
  controllers: [TipocambioController],
  providers: [TipocambiosService]
})
export class TipocambiosModule { }