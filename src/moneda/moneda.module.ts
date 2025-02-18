import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonedaEntitiy } from 'src/typeorm/entities/moneda.entity';
import { MonedaController } from './moneda.controller';
import { MonedasService } from './moneda.service';

@Module({
  imports: [TypeOrmModule.forFeature([MonedaEntitiy])],
  controllers: [MonedaController],
  providers: [MonedasService]
})
export class MonedasModule { }